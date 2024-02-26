export const navLinks = [
    {
        label: 'Events',
        route: '/events',
    },
    {
        label: 'Search',
        route: '/events/search',
    },
    {
        label: 'Create',
        routes: [
            {
                label: 'Event',
                route: '/events/create'
            },
            {
                label: 'Organization',
                route: '/organization/create'
            },
            {
                label: 'University',
                route: '/university/create'
            },
        ],
    },
    {
        label: 'Notifications',
        route: '/notifications',
    },
    {
        label: 'Profile',
        route: '/profile',
    },
]

export const defaultEvent = {
    organizer: '',
    title: '',
    description: '',
    categoryId: '',
    capacity: -1,
    address: '',
    locationName: '',
    startTime: new Date(),
    endTime: new Date(),
    price: '',
    isFree: true,
    contact: {
        phone: '',
        email: ''
    },
    orgId: '',
    visibility: '',
    approved: false,
    rating: -1,
}