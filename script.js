// Data to populate the tiles
const items = {
    apps: [
        { name: 'Spotify: Music and Podcasts', url: '#', icon: 'https://placehold.co/48x48/1DB954/white?text=S', description: 'The official Spotify app to stream millions of songs and podcasts.', rating: '4.7 ★' },
        { name: 'Duolingo: Learn a Language', url: '#', icon: 'https://placehold.co/48x48/58CC02/white?text=D', description: 'A free, fun, and effective app for learning new languages.', rating: '4.8 ★' },
        { name: 'Google Maps: Navigate & Explore', url: '#', icon: 'https://placehold.co/48x48/4285F4/white?text=M', description: 'Real-time GPS navigation, traffic, and public transit info.', rating: '4.3 ★' },
        { name: 'Trello: Manage Team Projects', url: '#', icon: 'https://placehold.co/48x48/0079BF/white?text=T', description: 'A visual way to organize, collaborate, and get things done.', rating: '4.5 ★' },
        { name: 'Headspace: Meditation & Sleep', url: '#', icon: 'https://placehold.co/48x48/F76735/white?text=H', description: 'Guided meditations, mindfulness, and sleep tools.', rating: '4.6 ★' },
        { name: 'Notion: All-in-one Workspace', url: '#', icon: 'https://placehold.co/48x48/313131/white?text=N', description: 'A single space for notes, tasks, wikis, and databases.', rating: '4.7 ★' }
    ],
    codes: [
        { name: 'AI-Powered Text Summarizer', url: '#', description: 'A Python script that uses natural language processing to condense long articles into short summaries.' },
        { name: 'E-commerce Microservice API', url: '#', description: 'A Node.js REST API for a simple e-commerce platform, handling products, orders, and user authentication.' },
        { name: 'React Native Social App UI', url: '#', description: 'A mobile UI kit for a social media application built with React Native and Tailwind CSS.' },
        { name: 'Rust CLI Tool for File Management', url: '#', description: 'A command-line tool written in Rust for fast and efficient file and directory manipulation.' },
        { name: 'Kubernetes Deployment with Helm', url: '#', description: 'A collection of Helm charts and Kubernetes manifests for deploying a microservice-based application.' },
    ],
    blogs: [
        { name: 'The Rise of Serverless Computing', url: '#', description: 'An overview of serverless architecture and its impact on modern web development.' },
        { name: 'Understanding CSS Grid Layout', url: '#', description: 'A comprehensive tutorial on how to use CSS Grid for building responsive and complex layouts.' },
        { name: 'My Journey into Machine Learning', url: '#', description: 'A personal account of learning the fundamentals of machine learning and building a simple model.' },
        { name: 'State Management in React with Zustand', url: '#', description: 'A guide to using Zustand for simple and efficient state management in React applications.' },
        { name: 'Building a Portfolio with Tailwind CSS', url: '#', description: 'Tips and tricks for creating a beautiful and responsive personal website using Tailwind CSS.' }
    ]
};

// Function to populate a tile with data
function populateTile(type) {
    const container = document.getElementById(`${type}-content`);
    if (!container) return;

    items[type].forEach(item => {
        const itemDiv = document.createElement('a');
        itemDiv.href = item.url;
        itemDiv.className = 'flex items-center space-x-4 p-4 rounded-lg bg-[#272627] hover:bg-[#2e2d2e] transition-colors cursor-pointer';

        const itemDetails = document.createElement('div');
        itemDetails.className = 'flex-1';
        
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = item.name;
        itemTitle.className = 'text-base font-bold text-gray-100';

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemDesc.className = 'text-xs text-gray-400 mt-1 line-clamp-2';

        itemDetails.appendChild(itemTitle);
        itemDetails.appendChild(itemDesc);

        if (type === 'apps') {
            const itemIcon = document.createElement('img');
            itemIcon.src = item.icon;
            itemIcon.alt = `${item.name} icon`;
            itemIcon.className = 'w-12 h-12 rounded-lg';
            
            const itemRating = document.createElement('span');
            itemRating.textContent = item.rating;
            itemRating.className = 'text-sm text-yellow-400 font-semibold';
            
            itemDiv.appendChild(itemIcon);
            itemDiv.appendChild(itemDetails);
            itemDiv.appendChild(itemRating);
        } else {
            itemDiv.appendChild(itemDetails);
        }
        
        container.appendChild(itemDiv);
    });
}

// Event listener to populate tiles when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTile('apps');
    populateTile('codes');
    populateTile('blogs');
});
