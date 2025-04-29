# AI Cover Letter Generator

A modern web application that helps job seekers generate personalized cover letters using AI. Built with Next.js, React, and OpenAI's API.

![AI Cover Letter Generator](public/favicon.ico)

## Features

- **AI-Powered Cover Letter Generation**: Create professional cover letters tailored to specific job positions
- **Customizable Inputs**: Specify job title, company, skills, and additional details
- **Real-time Preview**: See your generated cover letter as you make changes
- **Copy to Clipboard**: Easily copy your generated cover letter with one click
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Goal Tracking**: Track your job application progress with the goal banner

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Styled Components
- **State Management**: Zustand
- **Form Handling**: TanStack Form, Zod validation
- **API Integration**: OpenAI API
- **UI Components**: Custom components with responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-cover-letter-app.git
   cd ai-cover-letter-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Create a `.env.local` file in the root directory with your OpenAI API key:
   ```
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                  # Next.js app router pages
├── components/           # Reusable UI components
├── constants/            # Application constants and strings
├── hooks/                # Custom React hooks
├── interfaces/           # TypeScript interfaces
├── modules/              # Feature modules
│   ├── generator-form/   # Cover letter generation form
│   ├── letters-list/     # List of generated letters
│   └── openai-result/    # OpenAI API result display
├── services/             # API services
├── stores/               # Zustand state stores
├── ui/                   # UI components and layouts
└── utils/                # Utility functions
```

## Usage

1. Navigate to the home page to see your list of generated cover letters
2. Click "Create New" to generate a new cover letter
3. Fill in the job details form with:
   - Job title
   - Company name
   - Your skills
   - Additional details (optional)
4. Click "Generate Now" to create your personalized cover letter
5. Copy the generated text to use in your job application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the API
- Next.js team for the amazing framework
- All open-source libraries used in this project 