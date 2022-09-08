import { useBackToTopStore } from "@/stores/BackToTopStore";

const backToTopStore = useBackToTopStore();

const BackToTopSwitchPosition = () => {
  backToTopStore.switchPosition();

  return {};
};

export default BackToTopSwitchPosition;
