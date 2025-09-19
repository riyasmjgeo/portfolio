// Data to populate the tiles
const items = {
    apps: [
        { name: 'Spotify: Music and Podcasts', url: '#', icon: 'https://placehold.co/48x48/1DB954/white?text=S', description: 'The official Spotify app to stream millions of songs and podcasts.', rating: '4.7 ★' },
        { name: 'Google Maps: Navigate & Explore', url: '#', icon: 'https://placehold.co/48x48/4285F4/white?text=M', description: 'Real-time GPS navigation, traffic, and public transit info.', rating: '4.3 ★' },
    ],
    codes: [
        { name: 'AI-Powered Text Summarizer', url: '#', description: 'A Python script that uses natural language processing to condense long articles into short summaries.' },
        { name: 'E-commerce Microservice API', url: '#', description: 'A Node.js REST API for a simple e-commerce platform, handling products, orders, and user authentication.' },
        { name: 'React Native Social App UI', url: '#', description: 'A mobile UI kit for a social media application built with React Native and Tailwind CSS.' },
        { name: 'Rust CLI Tool for File Management', url: '#', description: 'A command-line tool written in Rust for fast and efficient file and directory manipulation.' },
        { name: 'Kubernetes Deployment with Helm', url: '#', description: 'A collection of Helm charts and Kubernetes manifests for deploying a microservice-based application.' },
    ],
    blogs: [
        { name: 'Paid cloud storage Vs free file sync?', url: './Blogs/syncthing.html', description: "Many people use cloud storage services like Google Drive or Dropbox to keep files in sync between their computers, phones, and tablets. However, this isn't always the most efficient or secure solution." },
        { name: 'Tidy your mailbox easily', url: './Blogs/tidy_mailbox_easily.html', description: "If you are someone who wish to get internet services without exposing your inbox for the spammers, this might help you!" },
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
