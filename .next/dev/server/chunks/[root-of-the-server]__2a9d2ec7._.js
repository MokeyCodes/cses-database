module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/cses-database/experience.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/cses-database/node_modules/mongoose)");
;
const experienceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    company: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: String,
    startDate: {
        type: Date,
        required: true
    },
    endDate: Date,
    description: String
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__["default"].model("Experience", experienceSchema);
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/cses-database/project.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/cses-database/node_modules/mongoose)");
;
const projectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    projectName: {
        type: String,
        required: true
    },
    startDate: Date,
    endDate: Date,
    description: String,
    deploymentLink: String,
    githubLink: String
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__["default"].model("Project", projectSchema);
}),
"[project]/cses-database/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/node_modules/dotenv/lib/main.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/cses-database/node_modules/mongoose)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$experience$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/experience.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$project$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/project.model.js [app-route] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].config();
;
;
;
const MONGO_URI = process.env.MONGO_URI;
async function connectDB() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGO_URI);
        console.log("✅ MongoDB connected!");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
}
async function addSampleData() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$experience$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        company: "CSES",
        title: "Developer for Runway Avenue",
        location: "San Diego, CA",
        startDate: new Date("2025-10-22"),
        endDate: null,
        description: "Web Developer for Runway Avenue."
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$project$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        projectName: "JATS: Job Application Tracking Service",
        startDate: new Date("2025-01-10"),
        description: "Google Chrome Extension that scrapes data (Job Title, Company, Date applied) on the hovered website to Google Sheets with a click of a button.",
        githubLink: "https://github.com/MokeyCodes/JATS",
        deploymentLink: null
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$project$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        projectName: "Minecraft Biome Classifier",
        startDate: new Date("2025-11-08"),
        description: "Used Transfer learning on a pre-trained ResNet-18, froze early layers and trained to recognize 29 different Minecraft biomes with ~80% public and ~84% private leaderboard accuracy.",
        githubLink: "https://github.com/MokeyCodes/minecraft-biome-classifier",
        deploymentLink: null
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$project$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        projectName: "Market Value Prediction for Soccer Players",
        startDate: new Date("2025-10-01"),
        description: "Built and implemented a linear regression model from scratch that predicts the market value of soccer players using a 2019 dataset of soccer players' stats with corresponding market values.",
        githubLink: "https://github.com/MokeyCodes/Soccer-Market-Value-Linear-Regression",
        deploymentLink: null
    });
    console.log("✨ Sample documents inserted!");
}
connectDB().then(addSampleData);
}),
"[project]/cses-database/app/api/experience/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002e51bec60ae8acd54a42b01fe9e47b200cdac1db":"GET","40d95b8e068cd7f430d28fe3e64d98bfddac581c68":"POST"},"",""] */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$experience$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/experience.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cses-database/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function GET() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    try {
        const experiences = await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$experience$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            startDate: -1
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(experiences);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to fetch experiences",
            error: err
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    try {
        const body = await req.json();
        const experience = await __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$experience$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(body);
        return __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(experience, {
            status: 201
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to create experience",
            error: err
        }, {
            status: 500
        });
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    GET,
    POST
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(GET, "002e51bec60ae8acd54a42b01fe9e47b200cdac1db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cses$2d$database$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(POST, "40d95b8e068cd7f430d28fe3e64d98bfddac581c68", null);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2a9d2ec7._.js.map