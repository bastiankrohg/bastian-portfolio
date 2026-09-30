// Field footage slot. To publish a clip, replace the placeholder <div> with ONE of:
//   <video src="/field.mp4" poster="/field-poster.webp" controls muted playsInline preload="none" className="w-full aspect-video rounded-xl bg-black" />
//   <iframe src="https://player.vimeo.com/video/VIDEO_ID?dnt=1" title="Field footage" allow="fullscreen; picture-in-picture" loading="lazy" className="w-full aspect-video rounded-xl" />
// Before publishing footage from hazardous areas, strip GPS/telemetry overlays and get clearance
// from the operator and, where relevant, the national mine action authority.

export function Footage() {
  return (
    <section id="footage" className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-14 text-center text-slate-500">
          Field footage coming later.
        </div>
      </div>
    </section>
  )
}
