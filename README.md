# ReWear - Community Clothing Exchange

A sustainable fashion platform enabling users to exchange unused clothing through direct swaps or a point-based redemption system.

## Features

- User Authentication (Email/Password)
- Landing Page with Featured Items
- User Dashboard
- Item Management
- Swap/Points System
- Admin Panel

## Tech Stack

- Frontend: React.js with Material-UI
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- Image Storage: Cloudinary

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```
3. Set up environment variables:
   - Create `.env` in backend directory
   - Add required environment variables (see .env.example)

4. Start the development servers:
   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory)
   npm start
   ```

## Environment Variables

Backend `.env`:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.