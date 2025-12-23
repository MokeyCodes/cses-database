module.exports = [
"[project]/cses-database/app/experience/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use client";
async function getExperienceData() {
    const url = "/api/experience";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
}),
];

//# sourceMappingURL=cses-database_app_experience_page_tsx_8ebffce4._.js.map