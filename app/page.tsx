"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// -----------------------------
// Types
// -----------------------------

type Speaker = {
  name: string;
  role: string;
  img: string;
  desc?: string;
  youtube?: string;
  instagram?: string;
};

type Keynote = {
  name: string;
  role: string;
  img: string;         // 로고 (story.png) - 현재 카드 밖 표시 제거됨
  desc: string;
  link?: string;
  person?: {
    name: string;
    role: string;
    photo: string;     // 배너(가로형)
    avatar?: string;   // 원형 아바타(프로필 사진)
    bioBullets?: string[]; // 약력 bullet
    links?: { label: string; href: string }[];
  };
};

// Program Table 타입
type ProgramRow = {
  start: string;          // "09:00"
  end: string;            // "09:10"
  duration: string;       // "10분"
  title: string;          // "Intro" / "Break" / "컨텐츠" 등
  speaker?: string;       // "이승윤님" 등 (여러 명일 경우 "A & B")
  org?: string;           // "Story Protocol" 등
  photoKey?: string;      // PERSON_IMAGES 키
  isBreak?: boolean;
};

// -----------------------------
// Nav / Data
// -----------------------------

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Speakers", href: "#speakers" },
  { label: "Program", href: "#program" },
  { label: "Tickets", href: "#tickets" },
];

// (참고 제공) 스피커 카드 데이터
const SPEAKERS: Speaker[] = [
  { name: "팬딩", role: "엄세현 대표", img: "/fanding.png", desc: "크리에이터 커머스 플랫폼", instagram: "https://www.instagram.com/fanding.kr/" },
  { name: "수빙수산", role: "조성우 대표", img: "/Frame 563.png", desc: "해산물 유통·콘텐츠 브랜드", youtube: "https://www.youtube.com/@soobingsootv", instagram: "https://www.instagram.com/sungpaak/" },
  { name: "3Y코퍼레이션", role: "진용진 대표", img: "/channels4_profile-8.jpg", desc: "크리에이터·프로덕션", youtube: "https://www.youtube.com/@jinyongjin_official", instagram: "https://www.instagram.com/jinyongjin92/" },
  { name: "조코딩", role: "조동근 대표", img: "/jocoding.png", desc: "개발·창업 교육 유튜브", youtube: "https://www.youtube.com/@jocoding", instagram: "https://www.instagram.com/jocoding/" },
  { name: "EO Studio", role: "김태용 대표", img: "/tykim.png", desc: "스타트업 인터뷰 미디어", youtube: "https://www.youtube.com/@EO_kr", instagram: "https://www.instagram.com/eostudio_official/" },
  { name: "HEMEKO", role: "이성규 대표", img: "/hemeko.png", desc: "뷰티 커머스·브랜드", youtube: "https://www.youtube.com/@kiudesign", instagram: "https://www.instagram.com/kiu_design_" },
  { name: "MARPPLE", role: "박혜윤 대표", img: "/maapple.png", desc: "커스텀 머천다이징 플랫폼", instagram: "https://www.instagram.com/marpple_official" },
  { name: "크리투스", role: "이경현 대표", img: "/reelshacker.png", desc: "크리에이터 성장 솔루션", youtube: "https://www.youtube.com/@TEAM_Creatus", instagram: "https://www.instagram.com/crea__tus" },
  { name: "디피", role: "이동표 대표", img: "/dp.png", desc: "신사임당 채널 운영", youtube: "https://www.youtube.com/@디피", instagram: "https://www.instagram.com/_dipi_e" },
  { name: "프라이머", role: "권도균 대표", img: "/douglas.png", desc: "스타트업 엑셀러레이터", youtube: "https://www.youtube.com/channel/UCA9FWfDU9_SnNl1MCQ-n7zQ", instagram: "https://www.instagram.com/primer.ac.kr" },    
  { name: "네이버웹툰", role: "김형일 대표", img: "/hyungil.png", desc: "글로벌 IP 플랫폼", youtube: "https://www.youtube.com/channel/UCA9FWfDU9_SnNl1MCQ-n7zQ", instagram: "https://www.instagram.com/primer.ac.kr" },
  { name: "비즈니스PT", role: "주언규 대표", img: "/earngyu.png", desc: "크리에이터 교육 플랫폼", youtube: "https://www.youtube.com/channel/UCA9FWfDU9_SnNl1MCQ-n7zQ", instagram: "https://www.instagram.com/primer.ac.kr" },
  { name: "인포크링크", role: "최하림 대표", img: "/inpock.png", desc: "크리에이터 솔루션", youtube: "https://www.youtube.com/channel/UCA9FWfDU9_SnNl1MCQ-n7zQ", instagram: "https://www.instagram.com/primer.ac.kr" }
];

// 연사 이름 → 이미지 경로 매핑
const PERSON_IMAGES: Record<string, string> = {
  "이승윤": "/sylee.png",
  "이성규": "/hemeko.png",
  "조성우": "/Frame 563.png",
  "이경현": "/reelshacker.png",
  "주언규": "/earngyu.png",
  "김태용": "/tykim.png",
  "이동표": "/dp.png",
  "조동근": "/jocoding.png",
  "진용진": "/channels4_profile-8.jpg",
  "최하림": "/inpock.png",
  "엄세현": "/fanding.png",
  "박혜윤": "/maapple.png",
  "김형일": "/hyungil.png",
  "권도균": "/douglas.png",
};

// Program Table 데이터 (스크린샷 반영)
const PROGRAM_TABLE: ProgramRow[] = [
  { start: "09:00", end: "09:10", duration: "10분", title: "Intro", speaker: "조직위원회", org: "" },
  { start: "09:10", end: "10:00", duration: "50분", title: "Keynote", speaker: "이승윤님", org: "Story Protocol", photoKey: "이승윤" },

  { start: "10:10", end: "10:40", duration: "30분", title: "커머스(뷰티)", speaker: "이성규님", org: "헤메코랩(기우쌤)", photoKey: "이성규" },
  { start: "10:40", end: "11:10", duration: "30분", title: "커머스(F&B)", speaker: "조성우님", org: "수빙수산", photoKey: "조성우" },

  { start: "11:10", end: "11:20", duration: "10분", title: "Break", isBreak: true },

  { start: "11:20", end: "11:50", duration: "30분", title: "컨텐츠(점심 세션)", speaker: "이경현님", org: "크리투스", photoKey: "이경현" },
  { start: "11:50", end: "12:20", duration: "30분", title: "컨텐츠(점심 세션)", speaker: "주언규님", org: "비즈니스PT", photoKey: "주언규" },

  { start: "12:20", end: "12:30", duration: "10분", title: "Break", isBreak: true },

  { start: "12:30", end: "13:00", duration: "30분", title: "Q&A", speaker: "이경현님 & 주언규님", org: "MC(설은서 파트너)", photoKey: "이경현" },
  { start: "13:00", end: "13:30", duration: "30분", title: "컨텐츠", speaker: "김태용님", org: "이오스튜디오", photoKey: "김태용" },
  { start: "13:30", end: "14:00", duration: "30분", title: "컨텐츠", speaker: "이동표님", org: "디피앤스튜디오", photoKey: "이동표" },
  { start: "14:00", end: "14:30", duration: "30분", title: "컨텐츠", speaker: "조동근님", org: "조코딩", photoKey: "조동근" },
  { start: "14:30", end: "15:00", duration: "30분", title: "Q&A", speaker: "진용진님 & 조동근님", org: "MC(설은서 파트너)", photoKey: "진용진" },

  { start: "15:00", end: "15:10", duration: "10분", title: "Break", isBreak: true },

  { start: "15:10", end: "15:40", duration: "30분", title: "플랫폼", speaker: "최하림님", org: "인포크링크", photoKey: "최하림" },
  { start: "15:40", end: "16:10", duration: "30분", title: "플랫폼", speaker: "엄세현님", org: "팬딩", photoKey: "엄세현" },
  { start: "16:10", end: "16:40", duration: "30분", title: "플랫폼", speaker: "박혜윤님", org: "마플코퍼레이션", photoKey: "박혜윤" },
  { start: "16:40", end: "17:20", duration: "40분", title: "플랫폼(글로벌)", speaker: "김형일님", org: "네이버웹툰", photoKey: "김형일" },
  { start: "17:20", end: "18:00", duration: "40분", title: "투자자 세션", speaker: "권도균님", org: "프라이머", photoKey: "권도균" },
  { start: "18:00", end: "18:30", duration: "30분", title: "그룹 세션 Q&A", speaker: "조직위원회", org: "MC(설은서 파트너)" },
  { start: "18:30", end: "21:30", duration: "3시간", title: "에프터 네트워킹", speaker: "조직위원회", org: "" },
];

// Keynotes
const KEYNOTES: Keynote[] = [
  {
    name: "",
    role: "",
    img: "/story.png",
    desc:
      "지적재산권(IP)의 창작·리믹스·유통을 온체인으로 표준화해, 글로벌 크리에이터가 공정하게 보상받는 ‘프로그래머블 IP’ 시대를 엽니다.",
    link: "https://www.storyprotocol.xyz/",
    person: {
      name: "이승윤 (S.Y. Lee)",
      role: "Co-Founder & CEO, Story Protocol",
      photo: "/story.png",
      avatar: "/sylee.png",
      bioBullets: [
        "모바일 연재 소설 플랫폼 ‘Radish’ 공동창업 · 2021년 카카오엔터테인먼트에 인수",
        "이후 카카오엔터테인먼트 Global Strategy Officer로 글로벌 투자·M&A 전략 수행",
        "옥스퍼드대 PPE 전공 · Oxford Union 회장 역임",
        "Forbes 30 Under 30 Asia 선정(Alumni)",
        "‘프로그래머블 IP’ 비전으로 온체인 라이선싱/리믹스 생태계 확장 주도"
      ],
      links: [
        { label: "Official", href: "https://www.storyprotocol.xyz/" },
        { label: "X (@storysylee)", href: "https://x.com/storysylee" }
      ]
    }
  }
];

// -----------------------------
// Page
// -----------------------------

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <NeonBackdrop />

      {/* Header (safe-area 패딩) */}
      <header
        className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-3 group">
            <Image src="/globe.svg" alt="CVS Logo" width={20} height={20} className="invert" />
            <span className="font-semibold tracking-tight group-hover:text-pink-400 transition">
              CREATOR VENTURE SEOUL
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-pink-400 transition">
                {n.label}
              </a>
            ))}
            <CTA href="#tickets">Register</CTA>
          </nav>
        </div>
      </header>

      {/* 헤더 높이 + safe-area 만큼 본문 밀어주기 */}
      <div style={{ height: "calc(4rem + env(safe-area-inset-top))" }} />

      <main className="relative isolate">
        {/* HERO */}
        <HeroBanner />

        {/* Keynotes */}
        <section id="keynotes" className="relative scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 inset-x-0 h-[34rem] -z-10
                       [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0.0))]
                       opacity-80"
          >
            <div className="absolute inset-0 blur-3xl
                            bg-[radial-gradient(50rem_28rem_at_20%_0%,rgba(236,72,153,0.28),transparent_60%),radial-gradient(50rem_28rem_at_80%_0%,rgba(59,130,246,0.28),transparent_60%),radial-gradient(40rem_24rem_at_50%_10%,rgba(168,85,247,0.28),transparent_65%)]" />
          </div>

          <SectionTitle kicker="Keynote">Keynotes</SectionTitle>

          <div className="mt-10">
            {KEYNOTES.map((k) => (
              <div key={k.name} className="flex-1">
                <KeynoteCardWide k={k} />
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section id="speakers" className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle kicker="Line-up">Speakers</SectionTitle>
          <p className="mt-3 text-sm text-zinc-400 text-center">
            크리에이터 · 플랫폼 · 커머스 분야의 주요 연사 라인업
          </p>
          <div className="mt-10 sm:mt-12">
            <MarqueeRow items={SPEAKERS} />
          </div>
        </section>



        {/* Tickets 섹션 (Contact 대체) */}
        <section
          id="tickets"
          className="scroll-mt-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center"
        >
          <div className="text-center">
            <p className="text-sm text-pink-400">Join us</p>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">티켓 구매</h2>
            <p className="mt-3 text-zinc-300">
              2025.10.24 (FRI) 09:00 · 서울 강남구 테헤란로 518, 3층 TEX+FA HALL
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://fanding.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-semibold h-12 px-8 text-base border border-pink-400/70 bg-pink-500/20 hover:bg-pink-500 hover:text-white transition"
            >
              바로 구매하기
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
              </svg>
            </a>
          </div>

          {/* 서브 안내문 (옵션) */}
          <p className="mt-4 text-xs text-zinc-500">결제는 파트너 플랫폼 FANDING에서 진행됩니다.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
          <span>© 2025 Creator Venture Seoul</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-pink-400">Code of Conduct</a>
            <a href="#" className="hover:text-pink-400">Privacy</a>
          </div>
        </div>
      </footer>

      {/* global styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee var(--marquee-duration, 30s) linear infinite; }
        @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none !important; transform: none !important; } }

        .animate-blob1 { animation: blob1 14s ease-in-out infinite alternate; }
        .animate-blob2 { animation: blob2 16s ease-in-out infinite alternate; }
        .animate-blob3 { animation: blob3 18s ease-in-out infinite alternate; }
        .animate-shimmer { animation: shimmer 22s linear infinite; }

        @keyframes blob1 { 0% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-40px) scale(1.08); } 66% { transform: translate(-35px,10px) scale(0.96); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes blob2 { 0% { transform: translate(0,0) scale(1); } 40% { transform: translate(-40px,25px) scale(1.05); } 70% { transform: translate(20px,-30px) scale(0.98); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes blob3 { 0% { transform: translate(0,0) scale(1); } 30% { transform: translate(10px,-20px) scale(1.06); } 80% { transform: translate(-25px,35px) scale(0.97); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes shimmer { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

// -----------------------------
// Scramble (타이핑 느낌)
// -----------------------------

function ScrambleTitle() {
  const LINES = ["CREATOR", "VENTURE", "SEOUL", "2025"];
  const TARGET = React.useMemo(() => LINES.join("\n"), []);
  const [text, setText] = React.useState(TARGET);

  const rafRef = React.useRef<number | null>(null);
  const startRef = React.useRef<number | null>(null);
  const runningRef = React.useRef(false);
  const reduceRef = React.useRef(false);
  const lastUpdateRef = React.useRef<number>(0);

  const baseDurationMs = 1800;
  const lineStaggerMs  = 140;
  const frameInterval  = 40;
  const alphabet       = "ACEORSTUV125";
  const scrambleRatio  = 0.32;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const prepareBuckets = React.useCallback(() => {
    const lineIndices: number[][] = Array.from({ length: LINES.length }, () => []);
    let line = 0;
    for (let i = 0; i < TARGET.length; i++) {
      const ch = TARGET[i];
      if (ch === "\n") { line += 1; continue; }
      if (ch === " ") continue;
      lineIndices[line].push(i);
    }
    const buckets: number[][] = lineIndices.map((arr) => {
      const shuffled = [...arr];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const count = Math.max(2, Math.ceil(shuffled.length * scrambleRatio));
      return shuffled.slice(0, count);
    });
    for (const b of buckets) {
      for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
      }
    }
    return buckets;
  }, [TARGET, LINES.length]);

  const run = React.useCallback(() => {
    if (reduceRef.current) return;
    runningRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    lastUpdateRef.current = 0;

    const buckets = prepareBuckets();
    const totalStagger = lineStaggerMs * (buckets.length - 1);
    const effectiveDuration = baseDurationMs + totalStagger;

    const tick = (now: number) => {
      if (!runningRef.current) return;
      if (startRef.current === null) startRef.current = now;

      if (now - lastUpdateRef.current < frameInterval) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastUpdateRef.current = now;

      const t = now - (startRef.current ?? 0);
      const buf = TARGET.split("");
      let allDone = true;

      for (let line = 0; line < buckets.length; line++) {
        const lineStart = line * lineStaggerMs;
        const raw = Math.max(0, Math.min(1, (t - lineStart) / baseDurationMs));
        const p = easeInOutCubic(raw);
        const indices = buckets[line];
        const revealCount = Math.floor(p * indices.length);
        if (revealCount < indices.length) allDone = false;

        const windowSize = Math.max(3, Math.min(6, Math.ceil(indices.length * 0.25)));
        const flickerStart = revealCount;
        const flickerEnd = Math.min(indices.length, revealCount + windowSize);

        for (let i = 0; i < revealCount; i++) buf[indices[i]] = TARGET[indices[i]];
        for (let i = flickerStart; i < flickerEnd; i++) buf[indices[i]] = alphabet[Math.floor(Math.random() * alphabet.length)];
        for (let i = flickerEnd; i < indices.length; i++) buf[indices[i]] = TARGET[indices[i]];
      }

      setText(buf.join(""));
      if (allDone || t >= effectiveDuration) {
        runningRef.current = false;
        setText(TARGET);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [prepareBuckets]);

  React.useEffect(() => {
    reduceRef.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceRef.current) {
      const id = setTimeout(run, 80);
      return () => clearTimeout(id);
    }
  }, [run]);

  React.useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      runningRef.current = false;
    };
  }, []);

  const restart = () => {
    if (reduceRef.current) return;
    if (runningRef.current) return;
    run();
  };

  return (
    <h1
      className="leading-[0.95] font-extrabold tracking-tight text-[12vw] sm:text-[10vw] md:text-[8.2vw] select-none"
      aria-label="CREATOR VENTURE SEOUL 2025"
      onMouseEnter={restart}
      onFocus={restart}
      tabIndex={0}
    >
      {text.split("\n").map((line, i) => (
        <span key={i} className="block">{line}</span>
      ))}
    </h1>
  );
}

// -----------------------------
// HERO COMPONENT (animated neon gradient)
// -----------------------------

function HeroBanner() {
  return (
    <section id="overview" className="relative overflow-hidden scroll-mt-16">
      {/* 배경 blob */}
      <div
        className="
          absolute inset-0 -z-10
          [mask-image:radial-gradient(80%_70%_at_50%_45%,#000_60%,transparent_100%)]
          md:[mask-image:radial-gradient(85%_80%_at_50%_45%,#000_60%,transparent_100%)]
        "
      >
        <div className="absolute -top-32 -left-24 w-[60rem] h-[60rem] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.45),transparent_60%)] 
                        blur-3xl animate-blob1" />
        <div className="absolute top-1/3 -right-40 w-[65rem] h-[65rem] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),transparent_60%)] 
                        blur-3xl animate-blob2" />
        <div className="absolute -bottom-40 left-1/3 w-[55rem] h-[55rem] rounded-full 
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.50),transparent_60%)] 
                        blur-3xl animate-blob3" />
 <div className="absolute inset-[-20%] opacity-70 mix-blend-screen 
                        bg-[conic-gradient(at_70%_40%,rgba(236,72,153,0.25),transparent_25%,rgba(168,85,247,0.25),transparent_55%,rgba(59,130,246,0.25),transparent_80%)] 
                        animate-shimmer" /> 
      </div>

      <div className="
        mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 
        py-16 md:py-24 
        md:block flex items-center min-h-[calc(100svh-4rem)] md:min-h-0
      ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-12 w-full">

          {/* 주소 */}
          <div className="order-1 md:order-1 md:col-span-6 text-center md:text-left">
            <p className="text-sm text-white/80 leading-6">
              서울 강남구 테헤란로 518<br />3층 TEX+FA HALL
            </p>
          </div>

          {/* 타이틀 */}
          <div className="order-2 md:order-3 md:col-span-12 text-center">
            <ScrambleTitle />
            {/* 티켓 구매 버튼 */}
            <div className="mt-6">
              <a
                href="https://fanding.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full font-semibold h-12 px-8 text-base border border-pink-400/70 bg-pink-500/20 hover:bg-pink-500 hover:text-white transition"
              >
                바로 구매하기
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 주최사 */}
          <div className="order-3 md:order-2 md:col-span-6 md:text-right">
            <div className="flex md:justify-end items-baseline gap-4 justify-center md:justify-end">
              <span className="font-semibold text-white/90">Primer</span>
              <span className="font-semibold text-white/90">FANDING</span>
            </div>
       <p className="mt-2 text-[11px] tracking-[0.25em] text-white/70 uppercase text-center md:text-right">
  Creator Conference<br className="hidden md:inline" /> in Seoul
</p>


          </div>

          {/* 영문 주소 */}
          <div className="order-4 md:order-4 md:col-span-6 hidden md:block">
            <p className="text-sm text-white/80 leading-6">
              3RD FLOOR, TEX+FA HALL,<br />518 TEHERAN-RO,<br />GANGNAM-GU, SEOUL
            </p>
          </div>

          {/* 날짜/시간 */}
          <div className="order-5 md:order-5 md:col-span-6 md:text-right text-center md:text-right">
            <p className="leading-tight">
              <span className="block text-[clamp(20px,3.2vw,36px)] font-semibold text-white/90">
                2025.10.24{" "}
                <span className="text-white/60 text-[0.65em] align-middle">FRI</span>
              </span>
              <span className="block text-[clamp(20px,3.2vw,36px)] font-semibold text-white/90 mt-1">
                09:00
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


// -----------------------------
// UI Components
// -----------------------------

function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full font-medium h-9 px-4 text-sm border border-pink-400/50 hover:bg-pink-500 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <p className="text-sm text-pink-400">{kicker}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}

function NeonBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.28),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.28),transparent_40%)]" />
      <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] bg-[conic-gradient(at_top_left,theme(colors.pink.500/.35),transparent_30%,theme(colors.purple.400/.35),transparent_60%,theme(colors.blue.400/.35))] blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[60rem] h-[60rem] bg-[conic-gradient(at_bottom_right,theme(colors.blue.400/.35),transparent_30%,theme(colors.purple.400/.35),transparent_60%,theme(colors.pink.500/.35))] blur-3xl" />
    </div>
  );
}

// -----------------------------
// Speakers UI (마퀴 카드)
// -----------------------------

const NeonCard: React.FC<{ sp: Speaker }> = ({ sp }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => setIsFlipped((v) => !v);
  const keyToggle: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div className="w-56 shrink-0 [perspective:1000px] group">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={toggleFlip}
        onKeyDown={keyToggle}
        className={[
          "relative h-80 w-full rounded-xl",
          "transition-transform duration-700 [transform-style:preserve-3d]",
          "cursor-pointer touch-manipulation",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
          "md:group-hover:[transform:rotateY(180deg)]",
        ].join(" ")}
      >
        {/* front */}
        <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 [backface-visibility:hidden]">
          <div className="relative aspect-square">
            <Image src={sp.img} alt={sp.name} fill className="object-cover" />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-semibold tracking-tight">{sp.name}</h3>
            <p className="text-xs text-zinc-400">{sp.role}</p>
          </div>
        </div>

        {/* back */}
        <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={sp.img}
              alt=""
              fill
              priority={false}
              aria-hidden
              className="object-cover scale-110 blur-xl"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <h3 className="font-semibold tracking-tight">{sp.name}</h3>
              <p className="mt-1 text-xs text-white/80">{sp.role}</p>
              {sp.desc && (
                <p className="mt-3 text-xs text-white/85 leading-relaxed">
                  {sp.desc}
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center justify-center gap-3">
              {sp.youtube && (
                <a
                  href={sp.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center rounded-full px-3 py-2 text-xs border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                >
                  YouTube
                </a>
              )}
              {sp.instagram && (
                <a
                  href={sp.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center rounded-full px-3 py-2 text-xs border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// Keynotes helpers
// -----------------------------

const KeynoteCardWide: React.FC<{ k: Keynote }> = ({ k }) => {
  return (
    <div className="relative w-full max-w-[810px] mx-auto rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:shadow-[0_0_60px_rgba(236,72,153,0.18)] transition">
      {/* 배너 */}
      <div className="relative aspect-[16/6] sm:aspect-[16/6]">
        {k.person?.photo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={k.person.photo}
                alt={k.person.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* 우상단 액션 */}
        <div className="absolute top-3 right-3 flex gap-2">
          {k.person?.links?.map((lnk) => (
            <a
              key={lnk.href}
              href={lnk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-black/35 backdrop-blur px-3 py-1 text-xs hover:bg-white/15"
            >
              {lnk.label}
            </a>
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-6 -mt-6">
        <div className="flex items-center gap-4">
          {(k.person?.avatar || k.person?.photo) && (
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden ring-2 ring-white/80 ring-offset-2 ring-offset-black bg-black/40">
              <Image
                src={k.person?.avatar ?? (k.person?.photo as string)}
                alt={`${k.person?.name} avatar`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="pb-2">
            <h3 className="text-[20px] sm:text-[22px] font-semibold leading-tight">
              {k.name}
            </h3>
            <p className="mt-0.5 text-sm text-zinc-400">{k.role}</p>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="p-5 sm:p-6 pt-4">
        {k.person && (
          <div className="rounded-xl border border-white/10 bg-black/25 p-4">
            <p className="font-semibold">{k.person.name}</p>
            <p className="text-sm text-zinc-400">{k.person.role}</p>
            {k.person.bioBullets && (
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-200">
                {k.person.bioBullets.map((b, i) => (
                  <li key={i} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.6rem] h-1.5 w-1.5 rounded-full bg-pink-400/90" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{k.desc}</p>
      </div>
    </div>
  );
};

// -----------------------------
// Program Table (스크린샷 스타일)
// -----------------------------


// -----------------------------
// Marquee (auto duration)
// -----------------------------

function MarqueeRow({ items }: { items: Speaker[] }) {
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const setDuration = () => {
      const distance = el.scrollWidth / 2;
      const isMobile = window.innerWidth < 640;
      const speedPxPerSec = isMobile ? 55 : 95;
      const durationSec = Math.max(15, Math.round(distance / speedPxPerSec));
      el.style.setProperty("--marquee-duration", `${durationSec}s`);
    };

    setDuration();
    window.addEventListener("resize", setDuration);
    return () => window.removeEventListener("resize", setDuration);
  }, []);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2 sm:py-4">
      <div
        ref={trackRef}
        className="animate-marquee flex gap-8 md:gap-10 will-change-transform"
        style={{ width: "max-content" } as React.CSSProperties}
      >
        {doubled.map((sp, i) => (
          <NeonCard key={`${sp.name}-${i}`} sp={sp} />
        ))}
      </div>
    </div>
  );
}
