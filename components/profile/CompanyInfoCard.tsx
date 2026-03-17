import ProfileCardWrapper from "./ProfileCardWrapper";

export default function CompanyInfoCard() {
    return (
        <ProfileCardWrapper
            title="Company Details"
            action={
                <button className="bg-primary-gradient text-white px-4 py-1.5 rounded-lg text-md font-medium hover:opacity-90 transition">
                    Edit
                </button>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-sm">
                <div>
                    <p className="text-muted text-xs mb-1">GST Number</p>
                    <p className="text-heading font-medium text-sm">23ABCDE1234F1Z5</p>
                </div>

                <div>
                    <p className="text-muted text-xs mb-1">Company Name</p>
                    <p className="text-heading font-medium text-sm">ABC Firm Pvt. ltd</p>
                </div>

                {/* <div>
                    <p className="text-muted text-xs mb-1">Business Type</p>
                    <p className="text-heading font-medium text-sm">
                        Electronics Retailer
                    </p>
                </div>

                <div>
                    <p className="text-muted text-xs mb-1">Website</p>
                    <p className="text-heading font-medium text-sm">www.dsmonline.in</p>
                </div> */}
            </div>
        </ProfileCardWrapper>
    );
}
