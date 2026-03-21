"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddressCard from "./AddressCard";
import CompanyInfoCard from "./CompanyInfoCard";
import PersonalInfoCard from "./PersonalInfoCard";
import ProfileHeaderCard from "./ProfileHeaderCard";
import {
    type AddressInfo,
    type CompanyInfo,
    type EditableSection,
    type PersonalInfo,
    defaultAddressInfo,
    defaultCompanyInfo,
    defaultPersonalInfo,
} from "./profileTypes";

const PERSONAL_STORAGE_KEY = "dsm-profile-personal-info";
const COMPANY_STORAGE_KEY = "dsm-profile-company-info";
const ADDRESS_STORAGE_KEY = "dsm-profile-address-info";

function getStoredValue<T>(key: string): T | null {
    if (typeof window === "undefined") {
        return null;
    }

    const value = window.localStorage.getItem(key);
    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value) as T;
    } catch {
        return null;
    }
}

function getInitialValue<T>(key: string, fallback: T): T {
    const storedValue = getStoredValue<T>(key);
    if (!storedValue) {
        return fallback;
    }

    if (
        typeof fallback === "object" &&
        fallback !== null &&
        typeof storedValue === "object" &&
        storedValue !== null
    ) {
        return {
            ...fallback,
            ...storedValue,
        };
    }

    return storedValue;
}

function formatFullName(personalInfo: PersonalInfo) {
    return `${personalInfo.firstName} ${personalInfo.lastName}`.trim();
}

function formatAddress(addressInfo: AddressInfo) {
    return [
        addressInfo.street,
        addressInfo.city,
        addressInfo.state,
        addressInfo.country,
        addressInfo.zipCode,
    ]
        .filter(Boolean)
        .join(", ");
}

export default function ProfileEditableSections() {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState<EditableSection>(null);
    const [addressMode, setAddressMode] = useState<"edit" | "add">("edit");
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(() =>
        getInitialValue(PERSONAL_STORAGE_KEY, defaultPersonalInfo)
    );
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() =>
        getInitialValue(COMPANY_STORAGE_KEY, defaultCompanyInfo)
    );
    const [addressInfo, setAddressInfo] = useState<AddressInfo>(() =>
        getInitialValue(ADDRESS_STORAGE_KEY, defaultAddressInfo)
    );

    const closeEditor = () => {
        setActiveSection(null);
        setAddressMode("edit");
    };

    const handlePersonalSave = (nextPersonalInfo: PersonalInfo) => {
        setPersonalInfo(nextPersonalInfo);
        window.localStorage.setItem(
            PERSONAL_STORAGE_KEY,
            JSON.stringify(nextPersonalInfo)
        );
        closeEditor();
        router.push("/my-wishlist");
    };

    const handleCompanySave = (nextCompanyInfo: CompanyInfo) => {
        setCompanyInfo(nextCompanyInfo);
        window.localStorage.setItem(
            COMPANY_STORAGE_KEY,
            JSON.stringify(nextCompanyInfo)
        );
        closeEditor();
        router.push("/my-wishlist");
    };

    const handleAddressSave = (nextAddressInfo: AddressInfo) => {
        setAddressInfo(nextAddressInfo);
        window.localStorage.setItem(
            ADDRESS_STORAGE_KEY,
            JSON.stringify(nextAddressInfo)
        );
        closeEditor();
        router.push("/my-wishlist");
    };

    return (
        <div className="space-y-4 md:space-y-6">
            <ProfileHeaderCard
                fullName={formatFullName(personalInfo)}
                description="Manage your details with ease."
                address={formatAddress(addressInfo)}
            />

            <PersonalInfoCard
                data={personalInfo}
                isEditing={activeSection === "personal"}
                onEdit={() => setActiveSection("personal")}
                onCancel={closeEditor}
                onSave={handlePersonalSave}
            />

            <CompanyInfoCard
                data={companyInfo}
                isEditing={activeSection === "company"}
                onEdit={() => setActiveSection("company")}
                onCancel={closeEditor}
                onSave={handleCompanySave}
            />

            <AddressCard
                data={addressInfo}
                isEditing={activeSection === "address"}
                mode={addressMode}
                onEdit={() => {
                    setAddressMode("edit");
                    setActiveSection("address");
                }}
                onAddAddress={() => {
                    setAddressMode("add");
                    setActiveSection("address");
                }}
                onCancel={closeEditor}
                onSave={handleAddressSave}
            />
        </div>
    );
}
