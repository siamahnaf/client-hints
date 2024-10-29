"use client"
import { useState, useEffect, useMemo } from "react";
import { DarkModeSwitch } from "animated-toggle-button";

const Toggler = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
    };

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={20}
            moonColor="#ffc107"
            sunColor="#ffc107"
        />
    );
};

export default Toggler;