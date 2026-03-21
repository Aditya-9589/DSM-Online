"use client";

import { useState } from "react";
import { Check, Edit, MapPin, PlusSquare } from "lucide-react";
import ProfileCardWrapper from "./ProfileCardWrapper";
import ProfileFormField from "./ProfileFormField";
import { emptyAddressInfo, type AddressInfo } from "./profileTypes";

interface AddressCardProps {
    data: AddressInfo;
    isEditing: boolean;
    mode: "edit" | "add";
    onEdit: () => void;
    onAddAddress: () => void;
    onCancel: () => void;
    onSave: (nextAddressInfo: AddressInfo) => void;
}

const buttonClassName =
    "rounded-xl px-5 py-3 text-sm font-medium transition sm:px-7 sm:text-base";

const countryOptions = [
    { label: "India", value: "India" },
    { label: "United States", value: "United States" },
    { label: "United Kingdom", value: "United Kingdom" },
];

const stateOptions = [
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Delhi", value: "Delhi" },
];

interface AddressFormProps {
    initialData: AddressInfo;
    onCancel: () => void;
    onSave: (nextAddressInfo: AddressInfo) => void;
}

function AddressForm({ initialData, onCancel, onSave }: AddressFormProps) {
    const [formData, setFormData] = useState<AddressInfo>(initialData);

    return (
        <form
            id="address-info-form"
            onSubmit={(event) => {
                event.preventDefault();
                onSave(formData);
            }}
            className="space-y-5"
        >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ProfileFormField
                    id="address-country"
                    label="Country"
                    value={formData.country}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            country: value,
                        }))
                    }
                    placeholder="Select country"
                    type="select"
                    options={countryOptions}
                    className="lg:col-span-2"
                />
                <ProfileFormField
                    id="address-state"
                    label="State"
                    value={formData.state}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            state: value,
                        }))
                    }
                    placeholder="Select state"
                    type="select"
                    options={stateOptions}
                    className="lg:col-span-2"
                />
                <ProfileFormField
                    id="address-city"
                    label="City"
                    value={formData.city}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            city: value,
                        }))
                    }
                    placeholder="Enter city"
                    className="lg:col-span-1"
                />
                <ProfileFormField
                    id="address-zip-code"
                    label="Zip Code"
                    value={formData.zipCode}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            zipCode: value,
                        }))
                    }
                    placeholder="Enter zip code"
                    className="lg:col-span-1"
                />
                <ProfileFormField
                    id="address-street"
                    label="Street Address"
                    value={formData.street}
                    onChange={(value) =>
                        setFormData((current) => ({
                            ...current,
                            street: value,
                        }))
                    }
                    placeholder="Enter street address"
                    multiline
                    className="lg:col-span-2"
                />
            </div>

            <label className="mt-5 flex items-center gap-3 text-base font-medium text-[#4b454b]">
                <input
                    type="checkbox"
                    checked={formData.saveForNextTime}
                    onChange={(event) =>
                        setFormData((current) => ({
                            ...current,
                            saveForNextTime: event.target.checked,
                        }))
                    }
                    className="peer sr-only"
                />
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-gradient text-white shadow-sm">
                    {formData.saveForNextTime ? <Check size={16} /> : null}
                </span>
                Save this information for next time
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm font-medium text-[#8f8590] transition hover:text-heading"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default function AddressCard({
    data,
    isEditing,
    mode,
    onEdit,
    onAddAddress,
    onCancel,
    onSave,
}: AddressCardProps) {
    if (isEditing) {
        return (
            <ProfileCardWrapper
                title={mode === "add" ? "Add Address" : "Edit Address"}
                description="Update only your address details in this section."
                action={
                    <button
                        type="submit"
                        form="address-info-form"
                        className={`bg-primary-gradient text-white shadow-sm hover:shadow-md ${buttonClassName}`}
                    >
                        Save
                    </button>
                }
            >
                <AddressForm
                    key={`${mode}-${data.city}-${data.zipCode}-${data.street}`}
                    initialData={mode === "add" ? emptyAddressInfo : data}
                    onCancel={onCancel}
                    onSave={onSave}
                />
            </ProfileCardWrapper>
        );
    }

    return (
        <ProfileCardWrapper
            title="Address"
            description="Manage your details with ease."
            action={
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={onAddAddress}
                        className={`bg-primary-gradient text-white flex items-center gap-1.5 hover:shadow-md sm:gap-2 ${buttonClassName}`}
                    >
                        <PlusSquare size={12} className="sm:h-3.5 sm:w-3.5" />
                        <span>Add Address</span>
                    </button>
                    <button
                        type="button"
                        onClick={onEdit}
                        className={`bg-primary-gradient text-white flex items-center gap-1.5 hover:shadow-md sm:gap-2 ${buttonClassName}`}
                    >
                        <span>Edit</span>
                        <Edit size={12} className="sm:h-3.5 sm:w-3.5" />
                    </button>
                </div>
            }
        >
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 text-sm sm:grid-cols-2 sm:gap-x-10">
                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <MapPin size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Country</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.country}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <MapPin size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">State</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.state}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <MapPin size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">City</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.city}
                    </p>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <MapPin size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Zip Code</p>
                    </div>
                    <p className="text-heading text-base font-medium sm:text-lg">
                        {data.zipCode}
                    </p>
                </div>

                <div className="col-span-1 sm:col-span-2">
                    <div className="mb-2 flex items-center gap-2 text-muted">
                        <MapPin size={14} className="shrink-0 sm:h-4 sm:w-4" />
                        <p className="text-sm">Street</p>
                    </div>
                    <p className="text-heading break-words text-base font-medium sm:text-lg">
                        {data.street}
                    </p>
                </div>
            </div>
        </ProfileCardWrapper>
    );
}
