import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MARGIN, SIZE } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";

const tiles = [
  {
    id: "google",
    uri: "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#1ecbe1",
  },

  {
    id: "expo",
    uri: "https://images.unsplash.com/photo-1682686581498-5e85c7228119?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#f3ff00",
  },
  {
    id: "facebook",
    uri: "https://images.unsplash.com/photo-1682686581221-c126206d12f0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#0C00FF",
  },
  {
    id: "reanimated",
    uri: "https://images.unsplash.com/photo-1706007171907-49841a64792a?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#5BFF00",
  },
  {
    id: "github",
    uri: "https://plus.unsplash.com/premium_photo-1706344618685-130196b0956c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#5BFF00",
  },
  {
    id: "rnnavigation",
    uri: "https://images.unsplash.com/photo-1706273427992-8a1b37142cb8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#00FFC0",
  },
  {
    id: "youtube",
    uri: "https://images.unsplash.com/photo-1683009427500-71296178737f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FF003F",
  },
  {
    id: "twitter",
    uri: "https://images.unsplash.com/photo-1706218388872-cee36f2fac69?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },

  {
    id: "luffy",
    uri: "https://images.unsplash.com/photo-1706247691880-6a8f94ef4cb0?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FF003F",
  },
  {
    id: "zoro",
    uri: "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "sanji",
    uri: "https://images.unsplash.com/photo-1706263085333-653485333e47?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "nami",
    uri: "https://images.unsplash.com/photo-1706359600093-ac7f78371945?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "robin",
    uri: "https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "chopper",
    uri: "https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "brook",
    uri: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "usoop",
    uri: "https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
  {
    id: "jimbei",
    uri: "https://images.unsplash.com/photo-1506620195489-7839a134b1f3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#05B4FA",
  },
];

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", paddingHorizontal: MARGIN }}
    >
      <SortableList>
        {tiles.map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile.id + "-" + index}
            id={tile.id + "-" + index}
            uri={tile.uri}
            color={tile.color}
          />
        ))}
      </SortableList>
    </SafeAreaView>
  );
};

export default Home;
