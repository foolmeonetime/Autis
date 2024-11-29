import Image from "next/image";
import Link from "next/link";
import { Twitter, Send } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-babyblue relative overflow-hidden flex flex-col justify-center items-center">
      {/* Centering content vertically and horizontally */}
      <div className="container mx-auto px-4 py-8 flex justify-center items-center flex-col">
        {/* Hero section with meme */}
        <div className="max-w-3xl text-center mb-12">
          <div className="rounded-lg overflow-hidden shadow-2xl mb-8 bg-white p-4">
            <Image
              src="/IMG_0778.jpeg"
              alt="White cat with pool of water and hippos in its head"
              width={350}
              height={350}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          {/* Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">About Autis</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              A whimsical representation of the internet's favorite feline phenomenon - 
              a fluffy white cat with a surreal twist. The top of its head opens up to 
              reveal a serene pool of water complete with tiny swimming monkeys, creating 
              a perfect blend of cute and quirky that captures the essence of crypto meme culture.
              <br />
              <span className="text-sm text-gray-500 font-bold">For Entertainment Purposes Only.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer with social links */}
      <footer className="bg-white/80 backdrop-blur-sm p-4 mt-auto">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 max-w-3xl">
          <Link
            href="https://dexscreener.com/solana/eb8qxmd44ocvbtzn4xkh25ngayzlntavhx682de1aeca?maker=68F9fagj6aN6UZKn8h1NzTtN3xVYSDDecWoVyfFQyYgc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-600 transition-colors text-center sm:text-left"
          >
            8GXjM6nHEdNimSAa6Vdh4C1pjv48Kg94yoUpm9qZpump
          </Link>

          <div className="flex gap-4">
            <Link
              href="https://x.com/themontrealer1?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>

            <Link
              href="https://t.me/autisssssssssss"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Send className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}