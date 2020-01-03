new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("h1");
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "-40", opacity: 1 });

        if (destination.index === 1) {
            const hugoimg = document.querySelectorAll(".hugoimg");
            const description = document.querySelector(".description");
            tl.fromTo(hugoimg, 2, { opacity: 0, x: "-80%" }, { opacity: 1, x: "25%" })
              .fromTo(
                description,
                0.8,
                { opacity: 0, y: "50" },
                { y: "0", opacity: 1 }
              )
              .fromTo(hugoimg[0], 1, { opacity: 0.3 }, { opacity: 1 })
              .fromTo(hugoimg[1], 2, { opacity: 0 }, { opacity: 1 })
              .fromTo(hugoimg[2], 3, { opacity: 0 }, { opacity: 1 });
          }
    }
});

// function to trigger Menu animation
document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.menu__list')
      .classList.toggle('menu__list--animate');
  });