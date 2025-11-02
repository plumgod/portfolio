'use client'

import Caustics from '@/components/Caustics'
import Link from 'next/link'

export default function Music() {
  const albums = [
    {
      title: "Plum God",
      year: "2019",
      type: "Album",
      cover: "/albums/plum-god.jpg",
      description: "Plum God is an electroacoustic album composed over three months in NYC. The album features zithers, woodwinds, brass, electric pianos, and field recordings of the city, all manipulated through custom Max/MSP patches, tape processing, and modular synthesis.",
      links: [
        { label: "Bandcamp", url: "https://mahorka.bandcamp.com/album/plum-god" },
	{ label: "Spotify", url: "https://open.spotify.com/album/1ejhaEX9paVJWChJRb0kHb?si=xiuSq0-hRp2FBpr_6OpgrQ" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/plum-god/1469985761" },
	{ label: "Selected Review", url: "https://dustedmagazine.tumblr.com/post/186493460814/austin-rockman-plum-god-self-released" }
      ]
    },
    {
      title: "Our Own Unknown",
      year: "2021",
      type: "Album",
      cover: "/albums/our-own-unknown.jpg",
      description: "Our Own Unknown is a solo guitar and ambient album composed during the lockdowns of 2020. The album utilizes artificial harmonic techniques and focuses on the physicality of the acoustic guitar. Custom Max/MSP patches were used alongside an indeterminate approach to composition inspired by Talk Talk's last two records.",
      links: [
        { label: "Bandcamp", url: "https://austinrockman.bandcamp.com/album/our-own-unknown" },
        { label: "Spotify", url: "https://open.spotify.com/album/1VZyDWhiLGloBRdneNzrhB?si=GINODNUcRS-bSuTDBw6m1A" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/our-own-unknown/1552632043" },
	{ label: "Selected Review", url: "https://dustedmagazine.tumblr.com/post/647093519392096256/austin-rockman-our-own-unknown-self-released" },
      ]
    },
    {
      title: "Seek No End",
      year: "2025",
      type: "Album",
      cover: "/albums/seek-no-end.jpg",
      description: "Seek No End is an experimental ambient and electronic music album composed in collaboration with Roopam Garg of The Surrealist. The record is an intricate and meticulous approach to sound design and explores expansion through minimalism. Custom Max/MSP patches were used alongside modular synthesis and Roopam's novel extended guitar techniques.",
      links: [
        { label: "Bandcamp", url: "https://seeknoend.bandcamp.com/album/seek-no-end" },
	{ label: "Spotify", url: "https://open.spotify.com/album/6FsRFkxhLLVMSJPQjT9lj9?si=JjBeFEzeTTSXVk1-6lGXrw" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/seek-no-end/1808823873" },
	{ label: "Selected Review", url: "https://dustedmagazine.tumblr.com/post/789421470840487937/austin-rockmanthe-surrealist-seek-no-end" },
      ]
    },
  ]

  const singles = [
    {
      title: "Mira",
      year: "2018",
      cover: "/singles/mira.jpg",
      description: "Composed in collaboration with Roopam Garg of The Surrealist.",
      links: [
	{ label: "Bandcamp", url: "https://thesurrealist.bandcamp.com/album/mira" },
        { label: "Spotify", url: "https://open.spotify.com/track/6eq0AED8fNPHS1oXhyRgpL?si=9da0325d934b49c9" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/mira-single/1644249791" },
      ]
    },
    {
      title: "Slowfield",
      year: "2019",
      cover: "/singles/slowfield.jpg",
      description: "Composed in collaboration with Roopam Garg of The Surrealist.",
      links: [
        { label: "Bandcamp", url: "https://austinrockman.bandcamp.com/track/slowfield" },
	{ label: "Spotify", url: "https://open.spotify.com/album/3VcLZQ1QczahozaH1vOjYz?si=PlM79S68T0a4DxNaok2row" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/slowfield-single/1558348674" },
      ]
    },
    {
      title: "Kaleido",
      year: "2019",
      cover: "/singles/kaleido.jpg",
      description: "Composed in collaboration with Roopam Garg of The Surrealist.",
      links: [
        { label: "Bandcamp", url: "https://thesurrealist.bandcamp.com/album/kaleido" },
	{ label: "Spotify", url: "https://open.spotify.com/album/0mJFSWXG5cuuMFvfn2td6C?si=NrtibkahRaePIUNoqaJq_Q" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/kaleido-single/1644256919" },
      ]
    },
    {
      title: "tape322",
      year: "2020",
      cover: "/singles/tape322.jpg",
      description: "Composed in collaboration with Roopam Garg of The Surrealist.",
      links: [
        { label: "Bandcamp", url: "https://austinrockman.bandcamp.com/track/tape322" },
	{ label: "Spotify", url: "https://open.spotify.com/album/2mJ6UL1wumW1pklERvoDYJ?si=8Aj49e6-TreNvS_gRqRA4Q" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/tape322-single/1518730767" },
      ]
    },
    {
      title: "Aqua Soul Furrow",
      year: "2020",
      cover: "/singles/aqua-soul-furrow.jpg",
      description: "Released by The Ambient Zone, a sub-label of Just Music. This piece utilizes the electric guitar for all sound sources.",
      links: [
        { label: "Bandcamp", url: "https://theambientzone.bandcamp.com/album/aqua-soul-furrow" },
	{ label: "Spotify", url: "https://open.spotify.com/album/3Mcy9SAX0zGOlVH0UJH3xj?si=UgmJ2HpKSuqDpXRarA9sHw" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/aqua-soul-furrow/1526835311?i=1526835312" },
      ]
    },
    {
      title: "Die On Realities",
      year: "2025",
      cover: "/singles/die-on-realities.jpg",
      description: "Composed in collaboration with Roopam Garg of The Surrealist.",
      links: [
        { label: "Bandcamp", url: "https://seeknoend.bandcamp.com/track/die-on-realities" },
	{ label: "Spotify", url: "https://open.spotify.com/album/74f9RGufsKnrypLjFzvnf6?si=8czmfBh2S42ay9uRQO6y5w" },
	{ label: "Apple Music", url: "https://music.apple.com/us/album/die-on-realities-single/1838153828" },
      ]
    },
  ]

  return (
    <div>
      <div className="fixed inset-0 z-0">
        <Caustics />
      </div>
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12 pt-32">
          <h1 className="text-5xl font-light mb-16">Music</h1>
          
          {/* Albums Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-12 opacity-70">Albums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album, index) => (
                <div key={index} className="group">
                  <div className="mb-4">
                    <div className="w-full aspect-square bg-white/5 border border-white/10 overflow-hidden">
                      <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-1">{album.title}</h3>
                    <p className="text-sm opacity-60 mb-3">({album.year} - {album.type})</p>
                    <p className="text-sm opacity-70 leading-relaxed mb-4">{album.description}</p>
                    <div className="flex gap-4 text-xs">
                      {album.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">{link.label} →</a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Singles Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-light mb-12 opacity-70">Singles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {singles.map((single, index) => (
                <div key={index} className="group">
                  <div className="mb-4">
                    <div className="w-full aspect-square bg-white/5 border border-white/10 overflow-hidden">
                      <img src={single.cover} alt={single.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-1">{single.title}</h3>
                    <p className="text-sm opacity-60 mb-3">({single.year} - Single)</p>
                    <p className="text-sm opacity-70 leading-relaxed mb-4">{single.description}</p>
                    <div className="flex gap-4 text-xs">
                      {single.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">{link.label} →</a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Link href="/" className="fixed top-8 left-8 z-20">
          <h1 className="text-2xl font-light tracking-wider text-white/90 hover:text-white transition-colors">Austin Rockman</h1>
        </Link>
      </div>
    </div>
  )
}