import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

interface Video {
  title: string;
  url: string;
}

const videos: Video[] = [
  { title: "TABOT", url: "https://ia800101.us.archive.org/0/items/20240822_20240822_0116/%D8%AA%D8%A7%D8%A8%D9%88%D8%AA.mp4" },
  { title: "IT", url: "https://ia600802.us.archive.org/20/items/0824-1/0824%20%281%29.mp4" },
  { title: "ENTKASH", url: "https://ia801805.us.archive.org/11/items/20240814_20240814_2205/%D8%A7%D8%AE%D8%AA%D8%B1%D8%A7%D9%82%20%D9%85%D8%B4%D8%B9%D9%84.mp4" },
  // ... add all other videos here
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(0,0,0,0))] animate-pulse"></div>
        <div className="absolute -inset-[100%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] animate-[noise_8s_linear_infinite]"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <header className="py-8 text-center">
          <h1 className="text-5xl font-bold text-purple-300 mb-4 tracking-wider">FREEMASONRY</h1>
          <div className="max-w-xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-lg text-purple-100 placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-2.5 text-purple-300/50" size={20} />
            </div>
          </div>
        </header>

        {/* Video Grid */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="group relative bg-purple-900/20 backdrop-blur-md rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-200 mb-4">{video.title}</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/50">
                    <video
                      controls
                      className="w-full h-full"
                      poster="https://media1.tenor.com/m/_9SQm92xoeYAAAAd/max-headroom.gif"
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-purple-200/80">
          <p className="text-lg mb-4">
            We would like to thank our brothers XCoder, WizNon, Ksr and the rest of the WizTeam and ourselves "FREEMASONRY" for creating these amazing tools.
          </p>
          <a
            href="https://discord.gg/dvXH85CfpN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
          >
            If you have any questions or problems, contact us on discord server
            <ExternalLink size={16} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;