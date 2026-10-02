"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [clipButton, setClipButton] = useState(false);

  const sections = useRef<HTMLElement[]>([]);
  const opaciter = useRef<HTMLElement[]>([]);
  const clipper = useRef<HTMLElement[]>([]);

  const [openMenu, setOpenMenu] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sections.current.forEach((section) => {
        gsap.to(section, {
          scale: 0.92,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      });

      opaciter.current.forEach((opaciter) => {
        gsap.to(opaciter, {
          opacity: 1,
          scrollTrigger: {
            trigger: opaciter,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      clipper.current.forEach((clipper) => {
        gsap.from(clipper, {
          clipPath: "inset(100% 0% 0% 0%)",
          scrollTrigger: {
            trigger: sections.current[2],
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        });
      });

      gsap.from(clipper.current[8], {
          clipPath: "inset(0% 0% 0% 0%)",
          scrollTrigger: {
            trigger: clipper.current[8],
            start: "top 50%",
            end: "bottom 10%",
            scrub: true,
          },
        });


    });
    return () => ctx.revert();
  }, []);

  return (
    <Box sx={{overflow:'hidden'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "fixed",
          zIndex: 999,
          width: "100vw",
          p: 2,

        }}
      >
        <Typography variant="h3">JACOB&CO.</Typography>
        <Stack
          sx={{
            color: "white",
            fontSize: "70px",
            transition: "all 0.3s ease",
            position: "relative",
          }}
          onClick={(e) => {
            if (e.type === "pointerdown" || e.type === "click") {
              setHovered(true);
              setTimeout(() => {
                setHovered(false);
                setOpenMenu((v) => !v);
              }, 500);
              return;
            }
            setOpenMenu((v) => !v);
          }}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setHovered(true);
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setHovered(false);
          }}
        >
          <HorizontalRuleIcon
            fontSize="inherit"
            sx={{
              clipPath: `inset(${hovered ? 50 : 53}% 0% 0% 0%)`,
              position: "absolute",
              transform: hovered
                ? "translateY(-2%)"
                : openMenu
                  ? "translateY(-14%) rotate(45deg)"
                  : "translateY(-14%)",
              transition: "transform 0.3s ease",
              border: "none",
            }}
          />
          <HorizontalRuleIcon
            fontSize="inherit"
            sx={{
              clipPath: `inset(0% 0% ${hovered ? 50 : 53}% 0%)`,
              transform: hovered
                ? "translateY(2%)"
                : openMenu
                  ? "translateY(-14%) rotate(-45deg)"
                  : "translateY(14%)",
              transition: "transform 0.3s ease",
              border: "none",
            }}
          />
        </Stack>
      </Box>
      <Box
        ref={(e: HTMLElement | null) => {
          if (e) sections.current[0] = e;
        }}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/images/Image.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display:'flex',
          justifyContent:'center',
          alignItems:'flex-end',
          p:4,
          mb:100
        }}
      >
        <Box
          
          ref={(e: HTMLElement | null) => {
            if (e) opaciter.current[1] = e;
          }}
          sx={{
            position: "absolute",
            inset: 1,
            bgcolor: "#00000080",
            pointerEvents: "none",
            opacity: 0,
          }}
        />  <Button
  ref={(e: HTMLElement | null) => {
    if (e) clipper.current[8] = e;
  }}
  sx={{
    position: "relative",
    bgcolor: "white",
    color: "black",
    borderRadius: "30px",
    p: 2,
    zIndex: 1,
    clipPath: "inset(100% 0% 0% 0%)",
  }}
  onMouseEnter={() => {
    setClipButton((c) => !c);
  }}
  onMouseLeave={() => {
    setClipButton((c) => !c);
  }}
>
  Hello World Hello World
  <Box
    component="span"
    sx={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "black",
      color: "white",
      borderRadius: "30px",
      border: "solid 1px white",
      clipPath: clipButton ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
      transition: "all 0.3s ease",
      pointerEvents: "none",
    }}
  >
    Hello World Hello World
  </Box>
</Button>
      </Box>

      <Box
        ref={(e: HTMLElement | null) => {
          if (e) sections.current[2] = e;
        }}
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          ref={(e: HTMLElement | null) => {
            if (e) opaciter.current[2] = e;
          }}
          sx={{
            position: "absolute",
            inset: 1,
            bgcolor: "#00000080",
            pointerEvents: "none",
            opacity: 0,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1, p: 4 }}>
          {" "}

          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[0] = e;
            }}
            sx={{
              fontSize: {xs: "15px",sm:'15px', md: "40px"}  ,
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            INSPIRED BY THE IMPOSSIBLE
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[1] = e;
            }}
            sx={{
              fontSize: {xs: "15px",sm:'15px', md: "40px"},
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            Jacob & Co. is driven by creativity and inspired by the
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[2] = e;
            }}
            sx={{
              fontSize: {xs: "15px",sm:'15px', md: "40px"},
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            impossible. Since his earliest beginnings in watches and
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[3] = e;
            }}
            sx={{
              fontSize: {xs: "15px",sm:'15px', md: "40px"},
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            {`jewelry, Founder Jacob Arabo has designed the industry's`}
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[4] = e;
            }}
            sx={{
              fontSize: {xs: "15px",sm:'15px', md: "40px"},
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            most iconic and innovative products.
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[5] = e;
            }}
            sx={{
              fontSize: "40px",
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
              mt: 3,
            }}
          >
            Today, Jacob & Co. reflects his immutable spirit and
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[6] = e;
            }}
            sx={{
              fontSize: "40px",
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            insatiable desire to produce beautiful works of art the
          </Typography>
          <Typography
            ref={(e: HTMLElement | null) => {
              if (e) clipper.current[7] = e;
            }}
            sx={{
              fontSize: {xs: "30px", md: "40px"},
              textAlign: "center",
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          >
            world has never seen before.
          </Typography>
        </Box>
      </Box>

      <Box
        ref={(e: HTMLElement | null) => {
          if (e) sections.current[3] = e;
        }}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/images/image2.webp)",
          backgroundPosition: "center",
          position: "sticky",
        }}
      >
        <Box
          ref={(e: HTMLElement | null) => {
            if (e) opaciter.current[3] = e;
          }}
          sx={{
            position: "absolute",
            inset: 1,
            bgcolor: "#0000007e",
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      </Box>

      <Box
        ref={(e: HTMLElement | null) => {
          if (e) sections.current[4] = e;
        }}
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/images/image3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "sticky",
        }}
      >
        <Box
          ref={(e: HTMLElement | null) => {
            if (e) opaciter.current[4] = e;
          }}
          sx={{
            position: "absolute",
            inset: 1,
            bgcolor: "#0000007e",
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      </Box>
    </Box>
  );
}
