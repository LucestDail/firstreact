import React, { useState, useContext } from "react";
import FlowBuilder, {
  NodeContext
} from "react-flow-builder";
import ConfigForm from "./ConfigForm.tsx";
import {
  DrawerComponent,
  PopconfirmComponent,
  PopoverComponent
} from "./antd/index.tsx";

import "./index.css";
import { startingNodes } from "./startingNodes.ts";

const StartNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

const EndNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? "node-configuring" : ""} ${
        node.validateStatusError ? "node-status-error" : ""
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const ConditionNodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${
        node.configuring ? "node-configuring" : ""
      } ${node.validateStatusError ? "node-status-error" : ""}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const registerNodes = [
  {
    type: "start",
    name: "시작박스",
    displayComponent: StartNodeDisplay,
    isStart: true
  },
  {
    type: "end",
    name: "종료박스",
    displayComponent: EndNodeDisplay,
    isEnd: true
  },
  {
    type: "node",
    name: "일반박스",
    displayComponent: NodeDisplay,
    configComponent: ConfigForm
  },
  {
    type: "condition",
    name: "분기별 박스",
    displayComponent: ConditionNodeDisplay,
    configComponent: ConfigForm
  },
  {
    type: "branch",
    name: "분기박스",
    conditionNodeType: "condition"
  },
  {
    type: "loop",
    name: "복귀박스",
    displayComponent: NodeDisplay,
    isLoop: true
  }
];

const NodeForm = () => {
  const [nodes, setNodes] = useState(startingNodes);

  const handleChange = () => {
    setNodes(nodes);
  };

  return (
    <>
      <FlowBuilder
        nodes={nodes}
        onChange={handleChange}
        registerNodes={registerNodes}
        historyTool
        zoomTool
        DrawerComponent={DrawerComponent}
        PopoverComponent={PopoverComponent}
        PopconfirmComponent={PopconfirmComponent}
      />
    </>
  );
};

export default NodeForm;
