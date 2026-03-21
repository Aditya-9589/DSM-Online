"use client";

import React from "react";

interface ProfileCardWrapperProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    action?: React.ReactNode;
}

export default function ProfileCardWrapper({
    title,
    description,
    children,
    action,
}: ProfileCardWrapperProps) {
    return (
        <div className="card min-w-0 rounded-[24px] border-white bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.04)] sm:rounded-[28px] sm:p-6 md:p-9">
            <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:mb-6 sm:flex-row sm:items-start">
                <div>
                    <h3 className="text-heading text-2xl font-semibold tracking-[-0.02em] sm:text-[2rem]">
                        {title}
                    </h3>
                    {description && (
                        <p className="mt-1 text-lg text-[#9a909d]">{description}</p>
                    )}
                </div>

                {action && action}
            </div>

            {children}
        </div>
    );
}
