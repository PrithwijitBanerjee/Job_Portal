import { configureStore } from "@reduxjs/toolkit";
import { JobPostSlice } from "./JobPostSlice";
import { JobDetailSlice } from "./JobDetailSlice";
import { JobApplicationSlice } from "./JobApplicationSlice";
import { JobNatureSlice } from "./JobNatureSlice";
import { AuthSlice } from "./AuthSlice";
import { JobCategorySlice } from "./JobCategorySlice";
import { FilterJobSlice } from "./FilterJobSlice";
import ContactMap from "../Components/Cores/CoreContact/ContactMap";
import { ContactSlice } from "./ContactSlice";

export const Store = configureStore({
    reducer: {
        job_posts: JobPostSlice.reducer,
        job_detail: JobDetailSlice.reducer,
        job_application: JobApplicationSlice.reducer,
        job_nature: JobNatureSlice.reducer,
        Auth: AuthSlice.reducer,
        job_category: JobCategorySlice.reducer,
        filter_job: FilterJobSlice.reducer,
        user_contact: ContactSlice.reducer,
    }
});