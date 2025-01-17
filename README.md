
# School Management Dashboard

A comprehensive full-stack school administration dashboard built using **Next.js**, **Prisma**, and **PostgreSQL**, with role-based authentication powered by **Clerk**. This app provides tailored functionality for various user roles such as admin, teachers, students, and parents.

---

## 🚀 Features

- **Role-Based Authentication**: Secure access with user roles (admin, teacher, student, parent).  
- **Dynamic Data Fetching**: Prisma-powered data queries with filters, search, and pagination.  
- **CRUD Functionality**: Manage entities such as students, teachers, parents, classes, subjects, and more.  
- **Analytics**: Generate charts and visual reports for attendance, performance, and other key metrics.  
- **Notifications**: Real-time updates using React Toastify.  
- **Event Management**: Add and manage recurring schedules using Big Calendar.  
- **Image Upload**: Cloudinary widget integration for image handling.  
- **Validation**: Forms with react-hook-form and Zod validation.  
- **Responsive UI**: Fully responsive and user-friendly interface.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React  
- **Backend**: Prisma, PostgreSQL  
- **Authentication**: Clerk  
- **Database**: PostgreSQL with Prisma ORM  
- **Deployment**: Docker  

---

## 📦 Installation

### Prerequisites
- Node.js installed
- Docker installed
- PostgreSQL installed (or run via Docker)

### Steps
1. Clone the repository:  
   ```bash
   git clone https://github.com/frank-shema/full-stack-school-project.git
   cd full-stack-school-admin
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up the environment variables:  
   Create a `.env` file in the root directory with the following values:  
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/school
   CLERK_API_KEY=your-clerk-api-key
   ```

4. Run PostgreSQL on Docker:  
   ```bash
   docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=school -p 5432:5432 -d postgres
   ```

5. Generate Prisma Client:  
   ```bash
   npx prisma generate
   ```

6. Seed the database:  
   ```bash
   npx prisma db seed
   ```

7. Start the development server:  
   ```bash
   npm run dev
   ```

8. Access the app at `http://localhost:3000`.

---

## 📂 Project Structure

- **/components**: Reusable UI components.  
- **/pages**: Next.js pages for different user roles.  
- **/prisma**: Database schema and seeds.  
- **/utils**: Helper functions and constants.  

---


### Documentation
- [Prisma Docs](https://www.prisma.io/docs)  
- [Next.js Docs](https://nextjs.org/docs)  

---

## 🛡️ Role-Based Features

### Admin  
- Manage teachers, students, parents, classes, and subjects.  
- Access analytics and reports.  

### Teachers  
- View and manage assigned classes and students.  
- Track attendance and assignments.  

### Students  
- View schedules, grades, and announcements.  

### Parents  
- Monitor their child's progress and view announcements.

---

## 📤 Deployment

1. Build the app:  
   ```bash
   npm run build
   ```

2. Deploy using Docker:  
   ```bash
   docker-compose up --build
   ```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📧 Support

Just give a star to this repo.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

--- 

Enjoy building your School Management Dashboard! 🎓
