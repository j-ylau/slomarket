# SLOMarket

SLOMarket is a local marketplace platform for buying and selling goods within the San Luis Obispo area. Users can list items, browse available goods, and communicate with sellers in a user-friendly environment.

## Stack

Frontend Framework: Next.js, which is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.

UI Library: Material-UI (now MUI), which is a React component library that implements Google's Material Design.

Authentication and Database: Firebase, which includes Firestore for your NoSQL database needs and Firebase Auth for handling user authentication.

State Management: React's built-in hooks such as useState and useEffect, with potential context provided by Firebase Auth's user state.

Routing: Next.js’s built-in routing, with navigation handled by next/navigation. 


## Features

- User authentication and profiles.
- Listing creation with image upload capabilities.
- Real-time search and filter options.
- Direct messaging between buyers and sellers (coming soon)
- Responsive design for mobile and desktop use.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/).
- If you are hosting your own Firebase instance, you must have a Firebase account and create a project to obtain your Firebase config keys.

### Installing SLOMarket

To install SLOMarket and run it using our Firebase instance (highly recommended), follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/slomarket.git
```

2. Navigate to the project directory:
```bash
cd slomarket
```

3. Install dependencies:
```bash
npm install
```

4. Set up your Firebase configuration by creating a `.env.local` file in the root of your project and adding your Firebase keys: 
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. Ensure you have a Firebase admin key file named `slomarket_admin_key.json` in the base path.

If you were not provided the API keys or the admin key file, please contact us for this information. 

6. Start the development server:
```bash
npm run dev
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Admin Actions

If you want to perform server-side admin actions, please contact us for an admin key.

## Deploying 

To deploy SLOMarket on your own Firebase instance, please follow the steps: 

1. run: 
```bash
npm run build
```

2. run: 
```bash
firebase deploy --only hosting
```

3. Find your API keys from the Firebase console in Project Settings > General. Then go to Project Settings > Service accounts and generate an admin key file. Then follow steps 4 and 5 from the previous section to install these keys.

## Usage

After logging in, users can create listings by providing details about the item they want to sell, including images, description, price, and location. Users can browse listings, filter by categories, and send messages to sellers to inquire more about items they are interested in.

## Contributing

We welcome contributions. To contribute to SLOMarket, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Help

If you encounter any issues, please open an issue in the repository, detailing the problem and steps to reproduce it.

## Roadmap

- Implement a rating and review system for users and listings.
- Add payment processing for secure transactions.
- Develop a recommendation engine for item suggestions.

## Authors and Acknowledgment

- Justin Lau 
- Ritvik Durgempudi
- Wesley Tam 
- Hayden Yakligian
- Caden Tierney 

For CSC307 Fall 2023 @ Cal Poly SLO. 

Thanks to the contributors who have helped to make this project what it is!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Project Status

As of Deceember 2023, SLOMarket is in beta. We are actively developing new features and addressing user feedback.


