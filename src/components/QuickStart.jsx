import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>To-Do List</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text delete style={styles.text}>
              CLAIM CAYETANO 10k HERE{" "}
              <a
                href="wwww.pornhub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CAYETANO FUNDS
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete style={styles.text}>
              GET cayetanoNFT: <Text code>10k$$$$$</Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text delete={isServerInfo} style={styles.text}>
              Join Cayetano COMMUNITY{" "}
              <a
                href="www.pornhub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CAyetano Community
              </a>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text delete={isServerInfo} style={styles.text}>
              CAYETANO ALL THE WAY(
              <a
                href="www.pornhub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CAYETANO SWAP
              </a>
              )
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔏">
            <Text delete={isServerInfo} style={styles.text}>
              CAYEEETAAANNOOO <Text code>5k$$$</Text> to <Text code>10k$$$</Text>{" "}
              JUST SWAP <Text strong>HERE</Text> and{" "}
              <Text strong>GET</Text> REKT{" "}
              <a
                href="www.pornhub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cayetano
              </a>
              :
            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>

            </Text>
            <Text code delete={isServerInfo} style={{ display: "block" }}>

            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <Text delete={isServerInfo} style={styles.text}>
              Play Cayetano BOLD <Text code></Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text delete={isInchDex} style={styles.text}>
              cayetano BOLD here{" "}
              <a
                href="www.pornhub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                cayetano bold
              </a>{" "}
              needed for the extra<Text code>{"<CAYETANODEX />"}</Text> 5k$$
              (optional)
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>CAYETANOSWAAAAP!!!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>HOW TO USE CAYETANSWAP</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Go to{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.pornhub.com"
                >
                  dex
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.pornhub.com"
                >
                  get fuck
                </a>{" "}
                <Text code>by CAYETANO</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>

              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>

              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>

              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{" "}
              <Text strong> </Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >

                </a>{" "}
                <Text code></Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                {" "}
                <Text code></Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                {" "}
                <Text code></Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
