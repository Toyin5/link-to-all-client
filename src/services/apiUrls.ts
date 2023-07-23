const apiUrls = {
    user: {
        register: "/auth/register",
        login: "/auth/login",
    },
    link: {
        create: "/link",
        get: (userId: string) => `/links/${userId}`,
        delete: (id: string) => `/link/${id}`,
        toggle: (id: string) => `/link/${id}`,
    }
} as const

export default apiUrls;