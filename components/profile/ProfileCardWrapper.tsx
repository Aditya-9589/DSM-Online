"use client";

import React from "react";

interface ProfileCardWrapperProps {
    title: string;
    children: React.ReactNode;
    action?: React.ReactNode; // ⭐ NEW
}

export default function ProfileCardWrapper({
    title,
    children,
    action,
}: ProfileCardWrapperProps) {
    return (
        <div className="card p-5 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-heading text-base md:text-lg font-semibold">
                    {title}
                </h3>

                {action && action}
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border-light)] mb-5" />

            {/* Content */}
            {children}
        </div>
    );
}
