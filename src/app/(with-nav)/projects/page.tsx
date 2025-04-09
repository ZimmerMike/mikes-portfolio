import InfoCard from "@/components/InfoCard/InfoCard";

export default function Projects() {
  return (
    <main>
      <h1>Proyectos</h1>
      <section className="flex flex-col items-center mt-12">
        <InfoCard
          title="El titulo"
          subtitle="Subtitulo"
          period="17/06/2024 - Presente"
          icon="pi-code"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus quam, rutrum quis elementum sit amet, rhoncus non neque. Duis mollis blandit congue. Fusce velit diam, rhoncus ut rutrum ut, posuere sed felis. Donec vel dui nec mauris congue gravida. Maecenas sed sem eu magna aliquam consectetur. Ut accumsan tincidunt ante ac posuere. Aliquam ut ex mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis luctus, felis in malesuada pulvinar, velit elit molestie est, in commodo eros ex sed eros. Etiam bibendum enim et lectus euismod fermentum. Proin vulputate, dolor id vehicula tincidunt, orci urna mollis diam, non rutrum tellus augue eu lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse in nulla vehicula, dictum erat id, condimentum magna. Integer quis ligula ut metus elementum ultrices. Maecenas aliquam felis sem, vel vulputate dolor tristique ac. Nunc elementum tristique eros vitae finibus.

Sed nunc diam, pharetra vitae volutpat sed, auctor at arcu. Vestibulum tincidunt tincidunt enim, eget volutpat tellus elementum quis. Integer sed ipsum sit amet mi gravida congue a vel nibh. Integer ornare dictum nibh vestibulum imperdiet. Nulla tempus felis nec erat rhoncus interdum. In non tempus urna. Duis ornare tincidunt sodales. In hac habitasse platea dictumst. Nullam a malesuada nibh, non vehicula diam. Curabitur mauris nisi, fermentum quis eros a, luctus tristique quam. Vivamus a purus at mi lacinia congue. Cras bibendum, libero in varius sollicitudin, tellus lectus mollis dolor, ac mattis tortor odio in ex. Mauris vel magna at urna ullamcorper ornare. Ut convallis, odio in placerat porta, magna nisi interdum est, in molestie est justo a mi. Cras eu leo commodo, aliquam arcu sed, tincidunt elit." />
      </section>
    </main>        
  );
}