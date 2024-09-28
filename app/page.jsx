import Card from "@/components/card";
import Container from "@/components/container";
import {
  libraries,
  animationTools,
  imageVideoTools,
  utilitiesTools,
  developerToolsResources,
  chartsDataVisualizations,
  fileUploads,
  audioVideo,
} from "@/lib/data";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-y-12 mt-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Frontend Resources
          </h1>
          <p className="mx-8">
            Your Ultimate Hub for Frontend Resources: Tools, Libraries, and
            Inspiration at Your Fingertips!
          </p>
        </div>
        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            UI Frameworks & Component Libraries
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {libraries.map((library) => (
              <Card key={library.id} data={library} />
            ))}
          </div>
        </section>
        <div className="border-t" />
        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            Animation & Interactivity
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {animationTools.map((animation) => (
              <Card key={animation.id} data={animation} />
            ))}
          </div>
        </section>
        <div className="border-t" />
        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            Image & Video Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {imageVideoTools.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </section>
        <div className="border-t" />
        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            Utilities & Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {utilitiesTools.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </section>
        <div className="border-t" />
        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            Developer Tools & Resources
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {developerToolsResources.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </section>
        <div className="border-t" />

        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            Charts & Data Visualizations
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {chartsDataVisualizations.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </section>
        <div className="border-t" />

        <section className="mx-6 flex flex-col gap-y-4">
          <h2 className="text-xl text-slate-900 font-semibold text-center md:text-left">
            File Uploads
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {fileUploads.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
