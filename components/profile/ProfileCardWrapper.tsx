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
        <div className="card p-4 sm:p-5 md:p-8 rounded-[16px] sm:rounded-[20px] md:rounded-[24px]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div>
                    <h3 className="text-heading text-base sm:text-lg md:text-xl font-bold">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-muted text-xs sm:text-sm mt-0.5 sm:mt-1">{description}</p>
                    )}
                </div>

                {action && action}
            </div>

            {/* Content */}
            {children}
        </div>
    );
}
