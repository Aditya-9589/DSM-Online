import ProfileCardWrapper from "./ProfileCardWrapper";
import { Building2, Edit } from "lucide-react";

export default function CompanyInfoCard() {
    return (
        <ProfileCardWrapper
            title="Company Details"
            description="Manage your details with ease."
            action={
                <button className="bg-primary-gradient text-white flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition hover:shadow-md">
                    <span>Edit</span>
                    <Edit size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
            }
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-5 sm:gap-y-8 text-sm mt-1 sm:mt-2">
                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <Building2 size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">GST Number</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">2345-3564-82YSD566</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <Building2 size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Company Name</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">ABC Firm Pvt. ltd</p>
                </div>
            </div>
        </ProfileCardWrapper>
    );
}
