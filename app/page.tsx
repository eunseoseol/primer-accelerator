export default function PrimerLanding() {
  const portfolio = [
    { n: "ODK Media", d: "아시아 영상 퍼블리싱", img: "/logos/odk.png" },
    { n: "StyleShare", d: "패션 SNS 기반 커머스 (무신사 매각)", img: "/styleshare.png" },
    { n: "MyRealTrip", d: "현지 여행 마켓", img: "/myrealtrip.png" },
    { n: "Bungaejangter", d: "중고거래 (네이버)", img: "/bungae.png" },
    { n: "Dailyhotel", d: "호텔 예약 (야놀자)", img: "/dailyhotel.png" },
    { n: "Soomgo", d: "전문가 매칭", img: "/soomgo.png" },
    { n: "Idus", d: "수공예 마켓", img: "/logos/idus.png" },
    { n: "Hogangnono", d: "아파트 실거래 (직방)", img: "/logos/hogangnono.png" },
    { n: "Modusign", d: "전자계약", img: "/modusign.png" },
    { n: "Miso", d: "홈서비스", img: "/logos/miso.png" },
    { n: "Seoltab", d: "실시간 수학 질문", img: "/logos/seoltab.png" },
    { n: "3.3", d: "세금 환급", img: "/logos/33.png" },
    { n: "RAEL", d: "D2C 이커머스", img: "/logos/rael.png" },
    { n: "Laftel", d: "애니·만화 (리디)", img: "/laftel.png" },
    { n: "Upstage", d: "Enterprise AI", img: "/logos/upstage.png" },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-lg">Primer</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#club" className="hover:text-white">PrimerClub</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#media" className="hover:text-white">Media</a>
            <a href="#apply" className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 hover:bg-white hover:text-zinc-900 transition">Apply</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">대한민국 최초 스타트업 액셀러레이터</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-[1.1]">괴짜들, 부적응자들, 반항아들, 문제아들과 함께<br className="hidden sm:block" /> 창업의 시작을 만들다.</h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">프라이머는 초기 스타트업에 <span className="text-white">투자</span>와 <span className="text-white">멘토링</span>을 제공합니다. 선배 창업가의 경험을 바탕으로 경영의 과학을 실천하며, 후속 투자와 지속 성장을 돕습니다.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="inline-flex items-center justify-center rounded-2xl bg-white text-zinc-900 px-6 py-3 font-semibold hover:bg-zinc-200 transition">PrimerClub 지원하기</a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">포트폴리오 보기</a>
          </div>
          <p className="mt-6 text-sm text-zinc-400">“세상을 바꿀 만큼 미친 사람들이 결국 그 일을 해낸다.” — Think Different</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">About Primer</h2>
            <p className="mt-4 text-zinc-300 leading-7">2010년 시작한 프라이머는 한국 스타트업 생태계의 문을 연 1세대 액셀러레이터입니다. 창업 훈련, 초기 투자, 멘토십, 네트워크를 통해 창업가가 제품·시장 적합성을 검증하고 빠르게 성장하도록 돕습니다.</p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> 초기·시드 단계 집중 투자 및 멘토링</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> PrimerClub을 통한 동료 창업가 커뮤니티</li>
              <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> 데모데이·오픈세미나·창업가 디너 등 정기 프로그램</li>
            </ul>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(236,72,153,0.08)]">
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Stat k="Since" v="2010" />
              <Stat k="Investments" v="200+" />
              <Stat k="Exits" v="10+" />
              <Stat k="Batches" v="25+" />
              <Stat k="Focus" v="IT/소프트웨어" />
              <Stat k="Location" v="Seoul" />
            </dl>
            <p className="mt-6 text-xs text-zinc-400">* 표기는 예시이며 프로젝트에 맞게 수정하세요.</p>
          </div>
        </div>
      </section>

      {/* PRIMER CLUB */}
      <section id="club" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold">PrimerClub</h2>
              <p className="mt-4 text-zinc-300 leading-7">PrimerClub은 잠재력 있는 창업가를 선발하여 소수 정예로 훈련하고 동료 학습과 멘토링을 제공하는 성장 커뮤니티입니다. 제품·고객·지표 중심의 실행을 강조하며, 배치 기간 동안 후속 투자 유치와 그로스에 집중합니다.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { t: "선발 및 시드 투자", d: "탑다운 평가 + 빠른 의사결정" },
                  { t: "집중 코칭", d: "주간 1:1/그룹 멘토링" },
                  { t: "커뮤니티", d: "동료 창업가 네트워크·세미나" },
                ].map((c, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 p-4 bg-white/5">
                    <p className="font-medium">{c.t}</p>
                    <p className="mt-1 text-sm text-zinc-400">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-zinc-400">다음 배치</p>
                <p className="mt-2 text-xl font-semibold">Primer 26기 데모데이</p>
                <p className="mt-1 text-sm text-zinc-400">신청 오픈 시 웹사이트에서 공지됩니다.</p>
                <a href="#apply" className="mt-4 inline-flex items-center rounded-xl bg-white text-zinc-900 px-4 py-2 font-medium hover:bg-zinc-200">지원 안내 받기</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Portfolio</h2>
          <p className="text-sm text-zinc-400">일부 예시·수정 가능</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {portfolio.map((p, i) => (
            <article key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
              <div className="aspect-[16/9] rounded-xl bg-zinc-900/60 border border-white/10 mb-3 flex items-center justify-center overflow-hidden">
                {p.img ? <img src={p.img} alt={p.n} className="object-contain h-full w-full" /> : <span className="text-sm text-zinc-400">로고</span>}
              </div>
              <h3 className="font-medium group-hover:text-white">{p.n}</h3>
              <p className="text-sm text-zinc-400">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

   {/* TEAM */}
<section id="team" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
  <h2 className="text-2xl sm:text-3xl font-semibold">Team</h2>
  <p className="mt-3 text-zinc-300">선배 창업가 출신 파트너들이 동행합니다.</p>
  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { n: "권도균", r: "CEO / Founder", b: "이니시스 창업, 연쇄창업가", img: "/partner1.png" },
      { n: "노태준", r: "Partner", b: "전 당근마켓", img: "/partner2.png" },
      { n: "설은서", r: "Partner", b: "전 이오스튜디오", img: "/partner3.png" },
    ].map((m, i) => (
      <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="aspect-square rounded-xl bg-zinc-900/60 border border-white/10 mb-4 flex items-center justify-center overflow-hidden">
          {m.img ? (
            <img src={m.img} alt={m.n} className="object-cover h-full w-full" />
          ) : (
            <span className="text-sm text-zinc-400">사진</span>
          )}
        </div>
        <p className="font-medium">{m.n}</p>
        <p className="text-sm text-zinc-400">{m.r}</p>
        <p className="mt-2 text-sm text-zinc-400">{m.b}</p>
      </div>
    ))}
  </div>
</section>


     {/* MEDIA */}
<section id="media" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
    <h2 className="text-2xl sm:text-3xl font-semibold">Media</h2>
    <p className="mt-3 text-zinc-300">데모데이, 인터뷰, 칼럼 등 최신 소식을 확인하세요.</p>

    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        "https://www.youtube.com/embed/pHXlF9DDLBk?si=eJ1AxuopJldeCfaW",
        "https://www.youtube.com/embed/xiFz2tdJGUA?si=vJ6F6zirz4ZGlaaG",
        "https://www.youtube.com/embed/6AiWm3wxzQM?si=sGkVIJPxxLq3LBrw",
        "https://www.youtube.com/embed/PrMRigYVpg8?si=vJuyIx1I_0t8tchX",
      ].map((url, i) => (
        <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10">
          <iframe
            src={url}
            className="w-full h-full"
            title={`Primer media ${i + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* APPLY CTA */}
      <section id="apply" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-white/5 to-sky-500/10 p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">PrimerClub에 합류하세요</h2>
          <p className="mt-3 text-zinc-300">창업의 시작, 프라이머와 함께 하세요. 배치 공고 및 지원은 공식 신청 페이지에서 확인할 수 있습니다.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://www.primer.kr/" target="_blank" className="inline-flex items-center justify-center rounded-2xl bg-white text-zinc-900 px-6 py-3 font-semibold hover:bg-zinc-200">공식 웹사이트</a>
            <a href="https://www.primer.kr/" target="_blank" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">신청 페이지</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Primer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@primer.kr" className="hover:text-white">info@primer.kr</a>
            <a href="https://www.instagram.com/primer.ac.kr/" target="_blank" className="hover:text-white">Instagram</a>
            <a href="#top" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <dt className="text-sm text-zinc-400">{k}</dt>
      <dd className="text-xl font-semibold mt-1">{v}</dd>
    </div>
  );
}
