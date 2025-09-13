"use client";

import { useState } from "react";

export default function EunseoSeolSite() {
  const data = {
    name: "Eunseo Seol",
    tagline: "Creator · Explorer · Builder",
    avatar: "/eunseo/avatar.jpg",
    location: "Seoul, KR",
    email: "hello@eunseoseol.com",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/eunseo-seol" },
      { label: "Instagram", href: "https://instagram.com/yourhandle" },
      { label: "YouTube", href: "https://youtube.com/@yourhandle" },
      { label: "X/Twitter", href: "https://x.com/yourhandle" },
    ],
    music: {
      spotifyArtist: "",
      spotifyPlaylist: "",
      soundcloudUser: "",
    },
    videos: [
      { title: "Showreel", url: "https://www.youtube.com/embed/VIDEO_ID" },
      { title: "Talk: Creativity", url: "https://www.youtube.com/embed/VIDEO_ID" },
    ],
    books: [
      { title: "The Creative Act", author: "Rick Rubin" },
      { title: "Range", author: "David Epstein" },
      { title: "Atomic Habits", author: "James Clear" },
    ],
    newsFeeds: [
      { label: "NYT Tech", url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" },
      { label: "Hacker News", url: "https://hnrss.org/frontpage" },
    ],
    career: [
      {
        company: "Company A",
        role: "Product Manager",
        period: "2023 – Present",
        summary: "Leading 0→1 initiatives across AI-enabled consumer experiences.",
        tags: ["AI", "Product", "Growth"],
      },
      {
        company: "Company B",
        role: "Designer",
        period: "2020 – 2023",
        summary: "Crafted brand systems and shipped polished mobile UX.",
        tags: ["Design", "iOS", "Brand"],
      },
    ],
    assets: {
      photos: [
        "/eunseo/photos/1.jpg",
        "/eunseo/photos/2.jpg",
        "/eunseo/photos/3.jpg",
        "/eunseo/photos/4.jpg",
      ],
      car: { name: "My Car", image: "/eunseo/car.jpg", notes: "EV, weekend trips, range 400km" },
      home: { name: "My Home", image: "/eunseo/home.jpg", notes: "Cozy, sunlight, plants" },
    },
  } as const;

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      <Header name={data.name} tagline={data.tagline} socials={data.socials} avatar={data.avatar} />

      <Section id="about" title="About">
        <div className="grid md:grid-cols-[200px,1fr] gap-6 items-start">
          <img src={data.avatar} alt={data.name} className="rounded-2xl border border-white/10 object-cover h-48 w-48" />
          <div>
            <p className="text-zinc-300 leading-7">
              안녕하세요, {data.name}입니다. {data.location}를 기반으로 음악·영상·디자인·제품을 넘나드는 창작 활동을 합니다.
              이 사이트는 제 작업과 관심사를 한 곳에 모아 소개하는 <span className="text-white">개인 허브</span>예요.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <a href={`mailto:${data.email}`} className="rounded-xl border border-white/10 px-3 py-1.5 hover:bg:white hover:text-zinc-900">
                {data.email}
              </a>
              <span className="opacity-60">•</span>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="photos" title="내 사진">
        {/* readonly 안전: 스프레드로 가변 배열 전달 */}
        <Masonry images={[...data.assets.photos]} />
      </Section>

      <Section id="music" title="내 음악">
        <div className="grid md:grid-cols-2 gap-6">
          {data.music.spotifyArtist && (
            <EmbedCard title="Spotify Artist">
              <iframe
                className="w-full h-80"
                src={`https://open.spotify.com/embed/artist/${data.music.spotifyArtist}`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </EmbedCard>
          )}
          {data.music.spotifyPlaylist && (
            <EmbedCard title="Spotify Playlist">
              <iframe
                className="w-full h-80"
                src={`https://open.spotify.com/embed/playlist/${data.music.spotifyPlaylist}`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </EmbedCard>
          )}
          {!data.music.spotifyArtist && !data.music.spotifyPlaylist && (
            <p className="text-zinc-400">플레이리스트나 아티스트 ID를 설정하면 여기 내장됩니다.</p>
          )}
        </div>
      </Section>

      <Section id="videos" title="내 영상">
        <div className="grid sm:grid-cols-2 gap-6">
          {data.videos.map((v, i) => (
            <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={v.url}
                  className="w-full h-full"
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-sm text-zinc-300">{v.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="books" title="내가 읽은 책">
        <ul className="grid sm:grid-cols-2 gap-4">
          {data.books.map((b, i) => (
            <li key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <p className="font-medium">{b.title}</p>
              <p className="text-sm text-zinc-400">{b.author}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="social" title="내 소셜 미디어">
        <div className="flex flex-wrap gap-3">
          {data.socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white hover:text-zinc-900"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Section>

      <Section id="news" title="내 뉴스">
        <p className="text-zinc-400 mb-4">
          관심 있는 RSS를 연결해 최신 글을 자동으로 끌어올 수 있어요. (정적 빌드에선 링크로, 서버/클라이언트에서 fetch하면 카드로 표시 가능)
        </p>
        <ul className="list-disc list-inside text-zinc-300">
          {data.newsFeeds.map((n, i) => (
            <li key={i}>
              <a className="underline decoration-white/20 hover:decoration-white" href={n.url} target="_blank">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="career" title="내 커리어">
        <div className="space-y-4">
          {data.career.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium">
                  {c.role} · {c.company}
                </p>
                <p className="text-sm text-zinc-400">{c.period}</p>
              </div>
              <p className="mt-2 text-zinc-300">{c.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t, idx) => (
                  <span key={idx} className="text-xs rounded-lg border border-white/10 px-2 py-1 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="wheels-n-home" title="내 자동차 · 내 집">
        <div className="grid md:grid-cols-2 gap-6">
          <AssetCard title={data.assets.car.name} image={data.assets.car.image} notes={data.assets.car.notes} />
          <AssetCard title={data.assets.home.name} image={data.assets.home.image} notes={data.assets.home.notes} />
        </div>
      </Section>

      <CTA />

      <Footer email={data.email} />
    </main>
  );
}

function Header({ name, tagline, socials, avatar }: any) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-zinc-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full overflow-hidden border border-white/10 bg-zinc-800">
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          </div>
          <span className="font-semibold">{name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          {[
            ["About", "#about"],
            ["사진", "#photos"],
            ["음악", "#music"],
            ["영상", "#videos"],
            ["책", "#books"],
            ["소셜", "#social"],
            ["뉴스", "#news"],
            ["커리어", "#career"],
            ["자차·집", "#wheels-n-home"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <p className="hidden sm:block text-sm text-zinc-400">{tagline}</p>
      </div>
    </header>
  );
}

function Section({ id, title, children }: any) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Masonry는 ReadonlyArray<string>을 받도록 해서 as const와 호환 */
function Masonry({ images }: { images: ReadonlyArray<string> }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
      <div className="contents">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="photo"
            className="mb-4 w-full rounded-2xl border border-white/10 hover:scale-[1.01] transition"
          />
        ))}
      </div>
    </div>
  );
}

function EmbedCard({ title, children }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="mb-3 text-sm text-zinc-400">{title}</p>
      {children}
    </div>
  );
}

function AssetCard({ title, image, notes }: { title: string; image: string; notes?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="aspect-[16/9] bg-zinc-900/60 border-b border-white/10">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <p className="font-medium">{title}</p>
        {notes && <p className="text-sm text-zinc-400 mt-1">{notes}</p>}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-white/5 to-sky-500/10 p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">프로젝트, 협업, 공연 제안</h2>
        <p className="mt-3 text-zinc-300">
          간단한 소개와 함께 연락 주세요. 포트폴리오 링크도 환영합니다.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#social"
            className="inline-flex items-center justify-center rounded-2xl bg-white text-zinc-900 px-6 py-3 font-semibold hover:bg-zinc-200"
          >
            소셜 보기
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            연락처
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ email }: { email: string }) {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Eunseo Seol. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${email}`} className="hover:text-white">
            {email}
          </a>
          <a href="#top" className="hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}