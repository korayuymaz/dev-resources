# Dev Resources

A modern web application for managing and discovering development resources. Built with Next.js, GraphQL, and NextAuth for a seamless developer experience.

## 🚀 Features

- **Resource Management**: Add, view, and organize development resources
- **Category Filtering**: Filter resources by categories (TOOL, COURSE, DOCS, VIDEO, UIKIT)
- **Favorites System**: Mark and filter favorite resources
- **Admin Panel**: Secure admin interface for resource management
- **Authentication**: NextAuth integration for user authentication
- **Modern UI**: Beautiful interface built with Tailwind CSS and DaisyUI
- **Real-time Updates**: GraphQL-powered real-time data updates

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, DaisyUI
- **Data Layer**: Apollo Client, GraphQL
- **Authentication**: NextAuth.js
- **Development**: ESLint, PostCSS

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- GraphQL backend (configured separately)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dev-resources
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Admin Configuration
NEXT_PUBLIC_ADMIN_EMAIL=admin@example.com

# GraphQL Endpoint
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
dev-resources/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── admin/             # Admin panel pages
│   │   ├── api/               # API routes
│   │   │   └── auth/          # NextAuth configuration
│   │   └── lib/               # Utility libraries
│   ├── components/             # React components
│   │   ├── AddResourceForm.tsx
│   │   ├── AuthButtons.tsx
│   │   ├── FavoriteButton.tsx
│   │   ├── RemoveButton.tsx
│   │   └── ResourceList.tsx
│   └── graphql/               # GraphQL operations
│       ├── fragments.ts
│       ├── mutations.ts
│       └── queries.ts
├── public/                     # Static assets
└── package.json
```

## 🎯 Usage

### Main Application

1. **View Resources**: Browse all available development resources on the home page
2. **Filter by Category**: Use the category buttons to filter resources
3. **Show Favorites**: Toggle to view only your favorite resources
4. **Access Resources**: Click "Go to Resource" to visit the external link

### Admin Panel

1. **Access Admin**: Navigate to `/admin` and sign in with admin credentials
2. **Add Resources**: Use the "Add Resource" form to create new entries
3. **Manage Resources**: Remove or modify existing resources

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 UI Components

The application uses DaisyUI components for a consistent and modern interface:

- **Cards**: Resource display cards with hover effects
- **Buttons**: Primary, secondary, and outline button styles
- **Forms**: Styled form inputs and selects
- **Badges**: Category and status indicators
- **Responsive Design**: Mobile-first responsive layout

## 🔐 Authentication

The application uses NextAuth.js for authentication:

- **Session Management**: Automatic session handling
- **Admin Access**: Role-based access control
- **Secure Routes**: Protected admin functionality

## 📊 GraphQL Integration

The application uses Apollo Client for GraphQL operations:

- **Queries**: Fetch resources with filtering
- **Mutations**: Create, update, and delete resources
- **Real-time Updates**: Automatic cache updates

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms

1. Build the application: `npm run build`
2. Start the production server: `npm run start`
3. Configure your hosting platform accordingly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
