import ProfileCardWrapper from "./ProfileCardWrapper";

export default function PersonalInfoCard() {
    return (
        <ProfileCardWrapper
            title="Personal Information"
            // desc="Manage you profile with ease",
            action={
                <button className="bg-primary-gradient text-white px-4 py-1.5 rounded-lg text-sm">
                    Edit
                </button>
            }
        >
            <div className="grid grid-cols-2 gap-y-6 text-sm">

                <div>
                    <p className="text-muted text-xs mb-1">First Name</p>
                    <p className="text-heading font-medium">Aisha</p>
                </div>

                <div>
                    <p className="text-muted text-xs mb-1">Last Name</p>
                    <p className="text-heading font-medium">Sheikh</p>
                </div>

                <div>
                    <p className="text-muted text-xs mb-1">Email Address</p>
                    <p className="text-heading font-medium">aishasheikh@gmail.com</p>
                </div>

                <div>
                    <p className="text-muted text-xs mb-1">Mobile Number</p>
                    <p className="text-heading font-medium">+91 2118 35624</p>
                </div>

            </div>
        </ProfileCardWrapper>
    );
}