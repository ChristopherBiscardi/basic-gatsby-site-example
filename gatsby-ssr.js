import React from "react";
import "./src/components/layout.css";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
