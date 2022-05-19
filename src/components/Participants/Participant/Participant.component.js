import React from "react";
import Card from "../../Shared/Card/Card.component";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
    videoType
  } = props;
  let screenWidth = window.innerWidth;
  let ownVideoSize = screenWidth / 3;


  if (!currentParticipant) return <></>;
  return (
    <>
      {currentParticipant.name == "admin" ?
        <></>
        :
        <>
          {screenWidth > 1100 ?
            <div className={`participant-live-chat ${hideVideo ? "hide" : ""}`}>
              <Card>
                <video
                  ref={videoRef}
                  className="live-video-chat"
                  id={`participantVideo${curentIndex}`}
                  autoPlay
                  playsInline
                ></video>
                {!currentParticipant.audio && (
                  <FontAwesomeIcon
                    className="muted"
                    icon={faMicrophoneSlash}
                    title="Muted"
                  />
                )}
                {showAvatar && (
                  <div
                    style={{ background: currentParticipant.avatarColor }}
                    className="avatar"
                  >
                    {currentParticipant.name[0]}
                  </div>
                )}
                <div className="name">

                  {currentParticipant.name}
                  {currentUser ? "(You)" : ""}
                </div>
              </Card>

            </div>
            :
            <>
              {videoType == "remort_video" ?

                <div className={`participant-live-chat ${hideVideo ? "hide" : ""}`}>
                  <Card>
                    <video
                      ref={videoRef}
                      className="live-video-chat"
                      id={`participantVideo${curentIndex}`}
                      autoPlay
                      playsInline
                    ></video>
                    {!currentParticipant.audio && (
                      <FontAwesomeIcon
                        className="muted"
                        icon={faMicrophoneSlash}
                        title="Muted"
                      />
                    )}
                    {showAvatar && (
                      <div
                        style={{ background: currentParticipant.avatarColor }}
                        className="avatar"
                      >
                        {currentParticipant.name[0]}
                      </div>
                    )}
                    <div className="name">

                      {currentParticipant.name}
                      {currentUser ? "(You)" : ""}
                    </div>
                  </Card>

                </div>
                :
                <div style={{ height: "28vh", width: ownVideoSize, position: 'absolute', right: "10px", margin: "5px", border: "1px solid gold", borderRadius: "5px", overflow: 'hidden' }}>
                  <video
                    ref={videoRef}
                    className="live-video-chat"
                    id={`participantVideo${curentIndex}`}
                    autoPlay
                    playsInline
                  ></video>
                </div>
              }
            </>

          }
        </>
      }


    </>
  );
};
