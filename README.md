# Notifications Demo

This is a small frontend application built with Next.js (App Router) and React Query, implementing a clean and responsive notifications UI. The goal was to write code that is easy to understand, easy to maintain, and behaves predictably.
### Features

- Fetch notifications from a public API
- Filter by type (info, warning, success, error)
- Search notifications by title or message
- Mark individual notifications as read
- Mark all notifications as read (optimistic update)
- Polling every 30 seconds to automatically refresh
- Light/Dark mode toggle
- Smooth loading states with skeleton placeholders
- Responsive layout

### Tech Decisions

- **Next.js App Router**  
  the project structure follows the App Router layout convention. Keeping components organized by feature makes the code easier to navigate
  
- **React Query**  
  Handles data fetching, caching, polling, and optimistic updates. It removes a lot of manual state management and keeps the UI in sync with the data.
- **Axios**  
  Used for HTTP requests. It’s a standard choice and keeps the fetch layer clean.

- **UI & Styling**  
  Used for layout and styling. The UI is intentionally simple and lightweight.
