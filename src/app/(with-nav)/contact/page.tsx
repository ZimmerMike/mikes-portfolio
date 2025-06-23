export default function Contact() {
  return (
    <main className="h-full">
      <h1>Contacto</h1>
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col gap-20 items-center">
          <h2 className="text-2xl font-semibold">Miguel Angel Hernandez Jimenez</h2>
          <div className="flex justify-around items-center w-full">
            <div className="flex flex-col gap-4 items-center">
              <i className="pi pi-envelope text-3xl"></i>
              <a className="text-xl font-semibold" href="mailto:miguelhernandez0498@gmail.com" target="_blank">miguelhernandez0498@gmail.com</a>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <i className="pi pi-phone text-3xl"></i>
              <a className="text-xl font-semibold" href="tel:+525548057103" target="_blank">(+52)55-4805-7103</a>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center w-full">
            <h3 className="text-2xl font-semibold">Redes sociales</h3>
            <div className="flex gap-16 items-center">
              <div className="flex flex-col gap-4 items-center">
                <i className="pi pi-linkedin text-3xl"></i>
                <a className="text-xl font-semibold" href="https://mx.linkedin.com/in/miguel-angel-hernandez-jimenez" target="_blank">LinkedIn</a>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <i className="pi pi-github text-3xl"></i>
                <a className="text-xl font-semibold" href="https://github.com/ZimmerMike" target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center w-full">
            <h3 className="text-2xl font-semibold">Agenda una entrevista</h3>
            <div className="flex gap-16 items-center">
              <div className="flex flex-col gap-4 items-center">
                <i className="pi pi-calendar-clock text-3xl"></i>
                <a className="text-xl font-semibold" href="https://cal.com/miguel-angel-hernandez-jimenez-d1cbvd/custom-meeting" target="_blank">Cal.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>        
  );
}
  