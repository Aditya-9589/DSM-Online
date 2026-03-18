import ProfileCardWrapper from "./ProfileCardWrapper";
import { User, Mail, Phone, Edit } from "lucide-react";

export default function PersonalInfoCard() {
    return (
        <ProfileCardWrapper
            title="Personal Information"
            description="Manage your details with ease."
            action={
                <button className="bg-primary-gradient text-white flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition hover:shadow-md">
                    <span>Edit</span>
                    <Edit size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
            }
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-8 gap-x-6 sm:gap-x-10 text-sm mt-1 sm:mt-2">

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <User size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">First Name</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">Aisha</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <User size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Last Name</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">Sheikh</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <Mail size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Email Address</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base break-all">aishasheikh@gmail.com</p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 text-muted">
                        <Phone size={14} className="sm:w-4 sm:h-4 shrink-0" />
                        <p className="text-xs sm:text-sm">Mobile Number</p>
                    </div>
                    <p className="text-heading font-medium text-sm sm:text-base">+91 2118 35624</p>
                </div>

            </div>
        </ProfileCardWrapper>
    );
}