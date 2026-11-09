export default function HomePage() {
  const refLink = 'https://lunar-silver-glow.com/?serial=61365830&creative_id=9330'

  return (
    <div className="m8k2-root min-h-screen bg-[#0b0410] text-[#f2eef8] flex flex-col">
      {/* HEADER SCREEN 2 CLONE */}
      <header className="m8k2-header sticky top-0 z-40 bg-[#0e0514] border-b border-[#22102e]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Mobile burger + Brand logo */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#m8k2-mobile-drawer"
              className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
              aria-label="Открыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            <a href={refLink} className="flex items-center gap-1.5 group">
              <span className="font-black italic text-2xl sm:text-3xl tracking-tighter text-white">
                ЛЯ
              </span>
              <span className="font-extrabold italic text-xs sm:text-sm tracking-widest uppercase m8k2-neon-pink">
                Casino
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-4 text-xs font-semibold uppercase tracking-wider text-zinc-300">
              <a
                href={refLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Бонусы
              </a>
              <a
                href={refLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Казино
              </a>
              <a
                href={refLink}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-[#ff2a8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                Live Казино
              </a>
            </nav>
          </div>

          {/* Right: Search, Login, Registration */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={refLink}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Поиск игр"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>

            <a
              href={refLink}
              className="px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white rounded-lg m8k2-btn-ghost"
            >
              Вход
            </a>

            <div className="relative">
              <a
                href={refLink}
                className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-white rounded-full m8k2-btn-pink inline-flex items-center gap-1.5"
              >
                Регистрация
              </a>
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#ff2a8d] rounded-full border-2 border-[#0e0514] flex items-center justify-center text-[10px] text-white">
                🎁
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE PURE-CSS DRAWER */}
      <div id="m8k2-mobile-drawer" className="m8k2-drawer fixed inset-0 z-50 pointer-events-none target:pointer-events-auto transition-opacity opacity-0 target:opacity-100">
        <a href="#!" className="absolute inset-0 bg-black/70 backdrop-blur-xs" aria-label="Закрыть меню"></a>
        <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-[#0e0514] border-r border-[#22102e] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#22102e]">
              <a href={refLink} className="flex items-center gap-1.5">
                <span className="font-black italic text-2xl text-white">ЛЯ</span>
                <span className="font-extrabold italic text-xs tracking-widest uppercase m8k2-neon-pink">Casino</span>
              </a>
              <a href="#!" className="p-2 text-zinc-400 hover:text-white" aria-label="Закрыть">
                ✕
              </a>
            </div>
            <nav className="mt-6 flex flex-col gap-3 font-semibold text-sm uppercase tracking-wider">
              <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 text-zinc-200 hover:text-white">
                🎁 Бонусы
              </a>
              <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 text-zinc-200 hover:text-white">
                🎰 Казино
              </a>
              <a href={refLink} className="p-2.5 rounded-lg hover:bg-white/5 text-zinc-200 hover:text-white">
                🎙️ Live Казино
              </a>
              <a href="#about-mirror" className="p-2.5 rounded-lg hover:bg-white/5 text-zinc-300">
                ℹ️ О зеркале
              </a>
              <a href="#about-games" className="p-2.5 rounded-lg hover:bg-white/5 text-zinc-300">
                ⚡ Как играть
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-2 pt-6 border-t border-[#22102e]">
            <a href={refLink} className="w-full py-2.5 text-center font-bold text-white rounded-full m8k2-btn-pink">
              Регистрация
            </a>
            <a href={refLink} className="w-full py-2.5 text-center font-semibold text-zinc-200 rounded-lg m8k2-btn-ghost">
              Вход
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        {/* HERO BANNER - SCREEN 2 REPLICATION */}
        <section className="m8k2-hero relative overflow-hidden py-4 sm:py-6 px-3 sm:px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ff2a8d]/20 bg-[#160721] min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] flex items-center">
              {/* Background Picture with Miami neon aesthetics */}
              <div className="absolute inset-0 z-0">
                {/* Fallback & primary background */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-bg.jpg"
                  alt="La Casino официальный сайт приветственный бонус"
                  className="w-full h-full object-cover object-right lg:object-center"
                />
                {/* Multi-layer gradient overlays for text readability & neon feel */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0410] via-[#0b0410]/80 to-transparent w-full lg:w-3/5 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0410] via-transparent to-transparent z-10" />
              </div>

              {/* Banner Text Content */}
              <div className="relative z-20 px-5 sm:px-10 lg:px-14 py-8 max-w-xl lg:max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff2a8d]/20 border border-[#ff2a8d]/40 text-[#ff8ec2] mb-3">
                  Новый официальный клуб
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  МОЩНЫЙ СТАРТ:
                </h1>
                <p className="mt-2 text-base sm:text-xl lg:text-2xl font-bold text-zinc-200">
                  до 225% + 1000 ФС на четыре депозита
                </p>
                <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={refLink}
                    className="px-6 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold text-white rounded-full m8k2-btn-pink inline-flex items-center gap-2"
                  >
                    Зарегаться!
                  </a>
                  <a
                    href={refLink}
                    className="px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white rounded-full m8k2-btn-ghost"
                  >
                    Получить зеркало
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOP PAYOUTS TICKER - SCREEN 2 REPLICATION */}
        <section className="m8k2-payouts px-3 sm:px-6 pb-6 sm:pb-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="m8k2-card-glass rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300">
                    ТОП Выплаты
                  </span>
                  <span className="text-[#ff2a8d] text-sm">✦</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline gap-1.5">
                  <span className="text-[#ff2a8d]">2 759 823</span>
                  <span className="text-sm font-bold text-zinc-400">RUB</span>
                </div>
              </div>

              {/* Winners grid / horizontal slider */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 pt-4">
                {[
                  { mult: '×3,5', id: 'ID 37*****98', win: '3 000 RUB', dep: '854 RUB депозит', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { mult: '×2', id: 'ID 75*****33', win: '2 000 RUB', dep: '1 000 RUB депозит', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { mult: '×3,5', id: 'ID 15*****02', win: '7 000 RUB', dep: '2 008 RUB депозит', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { mult: '×9', id: 'ID 64*****30', win: '9 000 RUB', dep: '1 001 RUB депозит', color: 'bg-[#ff2a8d]/25 text-[#ff8ec2] border-[#ff2a8d]/40' },
                  { mult: '×2', id: 'ID 55*****09', win: '2 000 RUB', dep: '994 RUB депозит', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { mult: '×2,1', id: 'ID 18*****31', win: '4 008 RUB', dep: '1 900 RUB депозит', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={refLink}
                    className="m8k2-card-item rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 hover:border-[#ff2a8d]/40 transition-colors group"
                  >
                    <span className={`px-2 py-1 rounded-lg text-xs font-black border ${item.color}`}>
                      {item.mult}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-zinc-400 truncate">{item.id}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1 group-hover:text-[#ff2a8d] transition-colors">
                        <span>{item.win}</span>
                        <span className="text-[10px] text-zinc-400">↗</span>
                      </div>
                      <div className="text-[10px] text-zinc-500 truncate">{item.dep}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO ARTICLE TEXT (300-400 WORDS TARGET WITH ALL SCREEN 1 KEYWORDS) */}
        <section className="m8k2-seo-content px-3 sm:px-6 py-8 sm:py-12 border-t border-[#1d0b2b]">
          <article className="max-w-[1100px] mx-auto space-y-8">
            {/* Section 1 */}
            <div id="about-official" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#ff2a8d] rounded-full inline-block"></span>
                La Casino официальный сайт и клуб Ля Казино
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Ищете проверенное азартное заведение с честными выплатами и лицензионным софтом?
                Добро пожаловать в <strong>La Casino</strong> — ультрасовременный клуб, где каждый совершеннолетний игрок может
                комфортно запускать любимые слоты, рулетку и карточные развлечения. Посетив{' '}
                <strong>La Casino официальный сайт</strong> или открыв бренд{' '}
                <strong>Ля Казино официальный сайт</strong>, вы получаете мгновенный доступ к премиальному каталогу из более чем пяти тысяч
                сертифицированных автоматов от признанных мировых провайдеров. Бренд{' '}
                <strong>Ля Казино официальный</strong> гарантирует прозрачную финансовую политику, регулярные турниры и надежную защиту пользовательских данных.
              </p>
            </div>

            {/* Section 2 */}
            <div id="about-mirror" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#ff2a8d] rounded-full inline-block"></span>
                La Casino зеркало и Ля Казино зеркало рабочее
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Периодические блокировки интернет-провайдеров больше не станут помехой для вашей победной сессии.
                Администрация проекта ежедневно обновляет резервные адреса: актуальное{' '}
                <strong>La Casino зеркало</strong> полностью повторяет основной портал и синхронизировано с единой защищенной базой.
                Используя официальное <strong>Ля Казино зеркало</strong>, вы без повторной регистрации входите в личный кабинет, сохраняя депозит, активные бонусы и статус лояльности.
                Проверенное <strong>Ля Казино зеркало рабочее</strong> позволяет пополнять баланс и выводить средства без задержек в любое время суток.
              </p>
            </div>

            {/* Section 3 */}
            <div id="about-games" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#ff2a8d] rounded-full inline-block"></span>
                La Casino играть и Ля Казино онлайн
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Для всех ценителей ярких эмоций созданы идеальные условия: в{' '}
                <strong>La Casino играть</strong> можно как на реальные рубли, так и в бесплатном демонстрационном режиме без риска.
                Если вы хотите в <strong>Ля Казино играть</strong> на реальные деньги, вам доступен щедрый приветственный пакет бонусов до 225% и до 1000 фриспинов на первые четыре пополнения.
                Платформа <strong>Ля Казино онлайн</strong> оптимизирована для мобильных телефонов и компьютеров, обеспечивая моментальный запуск барабанов в браузере.
                Выбирайте <strong>La Казино</strong> или клуб <strong>Ля Казино</strong> — регистрируйтесь прямо сейчас и забирайте максимальный куш уже сегодня!
              </p>
            </div>

            {/* Section 4 - FAQ & Advantages */}
            <div id="about-advantages" className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#ff2a8d] rounded-full inline-block"></span>
                Преимущества официального клуба Ля Казино
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Пользователи выбирают <strong>La Casino официальный</strong> благодаря моментальным выплатам на банковские карты и криптовалютные кошельки без скрытых комиссий.
                Круглосуточная служба поддержки всегда подскажет, как найти свежее <strong>Ля Казино зеркало рабочее</strong> или активировать промокод на фриспины.
                Лицензированные игровые автоматы от NetEnt, Pragmatic Play, Play&apos;n GO и Amatic гарантируют стопроцентно честный показатель возврата (RTP).
              </p>
            </div>

            {/* CTA Box */}
            <div className="m8k2-card-glass rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-[#ff2a8d]/30">
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                Готовы начать игру в La Casino?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
                Переходите по прямой рабочей ссылке на официальное зеркало Ля Казино и активируйте эксклюзивный приветственный бонус на свой депозит.
              </p>
              <div>
                <a
                  href={refLink}
                  className="px-8 py-3.5 text-sm sm:text-base font-extrabold text-white rounded-full m8k2-btn-pink inline-flex items-center gap-2"
                >
                  Войти и играть в La Casino
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* FOOTER WITH HASHTAGS FOR INTERNAL NAVIGATION */}
      <footer className="m8k2-footer bg-[#08020d] border-t border-[#1d0b2b] py-8 sm:py-12 px-3 sm:px-6">
        <div className="max-w-[1440px] mx-auto space-y-6">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
            <a href={refLink} className="flex items-center gap-1.5">
              <span className="font-black italic text-2xl text-white">ЛЯ</span>
              <span className="font-extrabold italic text-xs tracking-widest uppercase m8k2-neon-pink">Casino</span>
            </a>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <a href={refLink} className="hover:text-white transition-colors">Бонусы</a>
              <a href={refLink} className="hover:text-white transition-colors">Игровые автоматы</a>
              <a href={refLink} className="hover:text-white transition-colors">Рабочее зеркало</a>
              <a href={refLink} className="hover:text-white transition-colors">Поддержка 24/7</a>
            </div>
          </div>

          {/* Hashtags section required by SEO landing specs */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Популярные теги и разделы:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_casino</a>
              <a href="#about-mirror" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_casino_зеркало</a>
              <a href="#about-games" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_casino_играть</a>
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_casino_официальный</a>
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_casino_официальный_сайт</a>
              <a href="#about-games" className="m8k2-tag px-3 py-1.5 rounded-lg">#la_казино</a>
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино</a>
              <a href="#about-mirror" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_зеркало</a>
              <a href="#about-mirror" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_зеркало_рабочее</a>
              <a href="#about-games" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_играть</a>
              <a href="#about-games" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_онлайн</a>
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_официальный</a>
              <a href="#about-official" className="m8k2-tag px-3 py-1.5 rounded-lg">#ля_казино_официальный_сайт</a>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="pt-4 text-center text-xs text-zinc-500">
            © 2026 La Casino (Ля Казино). Все права защищены. Только для лиц старше 18 лет.
          </div>
        </div>
      </footer>

      {/* Floating Support Widget from Screen 2 bottom right */}
      <a
        href={refLink}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#ff2a8d] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Онлайн чат поддержки"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      </a>
    </div>
  )
}
