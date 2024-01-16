import Lottie from "lottie-react";

import loaderLottieData from "./LoaderLottie.json";
import Container from "../Container/Container";

function Loader() {
  return (
    <Container fullHeight fullWidth>
      <Lottie animationData={loaderLottieData} />
    </Container>
  );
}

export default Loader;
