import { CircularProgress } from "@mui/material";
import React from "react";
import { Button, Card, CloseButton, Modal } from "react-bootstrap";

/**
 * Global function
 * Code...
 */
const default_loadingText = "Loading...";
const LoadingAnim = ({ animation, text }) => {
  return (
    <>
      {animation ? animation : <CircularProgress size={10} />}
      &nbsp;&nbsp;{text ? default_loadingText : text}
    </>
  );
};

/* First Text Upper */
const firstTextUpper = (text) => {
  const words = text.split(" ");
  let result = "";
  words
    .map((word) => {
      const upper = word[0].toUpperCase();
      const lower = word.substring(1);
      return (result = upper + lower);
    })
    .join(" ");
  return result;
};

/* React-Select Styling */
const selectStyle = {
  valueContainer: (provided, state) => ({
    ...provided,
    maxHeight: 50,
    overflowY: "auto",
    fontSize: "0.875rem!important",
    "&:hover": {
      cursor: "pointer",
    },
  }),

  control: (base) => ({
    ...base,
    height: "calc(1.8125rem + 2px)",
    "&:hover": {
      cursor: "pointer",
    },
  }),
};

/* Error Describe */
const describeError = (error) => {
  var ObjectVar = {};
  for (const [key, errVal] of Object.entries(error)) {
    ObjectVar[key] = Object.values(errVal).reduce(function (keys, values) {
      return values;
    }, 0);
  }
  return ObjectVar;
};

/* Cursor Loading */
const cursorLoading = (status) => {
  if (status === true) {
    return (document.body.style.cursor = "wait");
  } else {
    return (document.body.style.cursor = "default");
  }
};

/**
 * Custom element
 * Code...
 */
const AppButton = ({
  children,
  appProps,
  className,
  onClick = () => {},
  colors = "teal",
  size = "",
  title = "",
  isLoading = false,
  loadingText,
  disabled = false,
}) => {
  return (
    <Button
      {...appProps}
      className={`${className ? `${className} ` : ""}${
        colors ? `btn-${colors}` : ""
      }`}
      size={size ? size : "md"}
      type="button"
      disabled={
        isLoading === true
          ? disabled === true
            ? true
            : true
          : disabled === false
          ? false
          : true
      }
      onClick={() => {
        onClick();
      }}
    >
      {isLoading === true ? (
        <LoadingAnim text={loadingText} />
      ) : title ? (
        title
      ) : children ? (
        children
      ) : (
        "Button"
      )}
    </Button>
  );
};
const AppPreloader = ({
  children,
  appProps,
  isLoading = false,
  loadingText,
}) => {
  return <>asd</>;
};
const AppPageTitle = ({
  children,
  appProps,
  isLoading = false,
  loadingText,
}) => {
  return <>asd</>;
};
const AppWrapper = ({ children, className, appProps }) => {
  return (
    <div className={`content${className ? ` ${className}` : ""}`} {...appProps}>
      {children}
    </div>
  );
};
const AppModal = ({
  show,
  appProps = {},
  onHide = () => {},
  isLoading = false,
  loadingText = default_loadingText,
  backdrop = true,

  closeBtnSize = "sm",
  modalSize = "md",
  modalBody = <></>,
  modalTitle = <></>,
  modalFooter = <></>,

  enableModalFooter = false,
  enableFooterButton = true,

  btnConfirm = {
    enable: true,
    loading: false,
    loadingText: "",
    title: "Confirm",
    size: "sm",
    disabled: false,
    onClick: () => {},
  },
  btnCancel = {
    enable: true,
    loading: false,
    loadingText: "",
    title: "Cancel",
    size: "sm",
    disabled: false,
    onClick: () => {
      onHide();
    },
  },
}) => {
  /* Default Button Confirm */
  const dc_btnConfirm = {
    enable: btnConfirm ? (btnConfirm.enable ? btnConfirm.enable : true) : true,
    loading: btnConfirm
      ? btnConfirm.loading
        ? btnConfirm.loading
        : false
      : false,
    loadingText: btnConfirm
      ? btnConfirm.loadingText
        ? btnConfirm.loadingText
        : default_loadingText
      : default_loadingText,
    title: btnConfirm
      ? btnConfirm.title
        ? btnConfirm.title
        : "Confirm"
      : "Confirm",
    size: btnConfirm ? (btnConfirm.size ? btnConfirm.size : "sm") : "sm",
    disabled: btnConfirm
      ? btnConfirm.disabled
        ? btnConfirm.disabled
        : false
      : false,
    onClick: btnConfirm
      ? btnConfirm.onClick
        ? btnConfirm.onClick
        : () => {}
      : () => {},
  };
  /* Default Button Cancel */
  const dc_btnCancel = {
    enable: btnCancel ? (btnCancel.enable ? btnCancel.enable : true) : true,
    loading: btnCancel
      ? btnCancel.loading
        ? btnCancel.loading
        : false
      : false,
    loadingText: btnCancel
      ? btnCancel.loadingText
        ? btnCancel.loadingText
        : default_loadingText
      : default_loadingText,
    title: btnCancel
      ? btnCancel.title
        ? btnCancel.title
        : "Confirm"
      : "Confirm",
    size: btnCancel ? (btnCancel.size ? btnCancel.size : "sm") : "sm",
    disabled: btnCancel
      ? btnCancel.disabled
        ? btnCancel.disabled
        : false
      : false,
    onClick: btnCancel
      ? btnCancel.onClick
        ? btnCancel.onClick
        : () => {}
      : () => {},
  };

  return (
    <Modal
      show={show}
      backdrop={backdrop}
      aria-labelledby="appModal"
      dialogClassName={`app-modal modal-dialog-centered ${
        modalSize !== "" ? `modal-${modalSize}` : `modal-md` // Default size md, centered modal display
      }`}
      onHide={() => {
        onHide();
      }}
      {...appProps}
    >
      <Modal.Header className="app-modal-header">
        <div className="mr-auto">
          <Modal.Title className="app-modal-title">{modalTitle}</Modal.Title>
        </div>
        <div className="ml-auto">
          {isLoading === true ? (
            <>
              <LoadingAnim text={loadingText} />
              &nbsp; &nbsp;
            </>
          ) : (
            <></>
          )}
          <CloseButton
            aria-label="Hide"
            variant="dark"
            className={`btn${
              closeBtnSize !== "" ? ` btn-${closeBtnSize}` : "btn-sm"
            }`}
            onClick={() => {
              onHide();
            }}
          />
        </div>
      </Modal.Header>
      <Modal.Body className="app-modal-body">{modalBody}</Modal.Body>
      {enableModalFooter === true ? (
        <Modal.Footer className="app-modal-footer">
          {/* Custom footer */}
          {modalFooter}
          {enableFooterButton === true ? (
            <>
              {/* Default button cancel */}
              {dc_btnCancel.enable === true ? (
                <AppButton
                  colors="danger"
                  disabled={
                    dc_btnCancel.disabled ? dc_btnCancel.disabled : false
                  }
                  size={dc_btnCancel.size ? dc_btnCancel.size : "sm"}
                  onClick={() => {
                    dc_btnCancel.onClick();
                  }}
                  title={
                    dc_btnCancel.loading === true
                      ? dc_btnCancel.loadingText === ""
                        ? default_loadingText
                        : dc_btnCancel.loadingText
                      : dc_btnCancel.title
                  }
                />
              ) : (
                <></>
              )}
              {/* Default button confirm */}
              {dc_btnConfirm.enable === true ? (
                <AppButton
                  colors="teal"
                  disabled={
                    dc_btnConfirm.disabled ? dc_btnConfirm.disabled : false
                  }
                  size={dc_btnConfirm.size ? dc_btnConfirm.size : "sm"}
                  onClick={() => {
                    dc_btnConfirm.onClick();
                  }}
                  title={
                    dc_btnConfirm.loading === true
                      ? dc_btnConfirm.loadingText === ""
                        ? default_loadingText
                        : dc_btnConfirm.loadingText
                      : dc_btnConfirm.title
                  }
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </Modal.Footer>
      ) : (
        <></>
      )}
    </Modal>
  );
};

const AppCard = ({
  cardClassName,
  cardColors,
  cardSett = {
    enableHeader: true,
    cardHeader: {
      appProps: {},
      className: "",
      content: <></>,
    },
    enableFooter: false,
    cardFooter: {
      appProps: {},
      className: "",
      content: <></>,
    },
    cardBody: {
      appProps: {},
      className: "",
      content: <></>,
    },
  },
}) => {
  /* Set Card Props */
  const setCard = {
    enableHeader: cardSett
      ? cardSett.enableHeader
        ? cardSett.enableHeader
        : true
      : true,
    cardHeader: {
      appProps: cardSett
        ? cardSett.cardHeader
          ? cardSett.cardHeader.appProps
            ? cardSett.cardHeader.appProps
            : {}
          : {}
        : {},
      className: cardSett
        ? cardSett.cardHeader
          ? cardSett.cardHeader.className
            ? cardSett.cardHeader.className
            : ""
          : ""
        : "",
      content: cardSett ? (
        cardSett.cardHeader ? (
          cardSett.cardHeader.content ? (
            cardSett.cardHeader.content
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      ),
    },
    enableFooter: cardSett
      ? cardSett.enableFooter
        ? cardSett.enableFooter
        : false
      : false,

    cardFooter: {
      appProps: cardSett
        ? cardSett.cardFooter
          ? cardSett.cardFooter.appProps
            ? cardSett.cardFooter.appProps
            : {}
          : {}
        : {},
      className: cardSett
        ? cardSett.cardFooter
          ? cardSett.cardFooter.className
            ? cardSett.cardFooter.className
            : ""
          : ""
        : "",
      content: cardSett ? (
        cardSett.cardFooter ? (
          cardSett.cardFooter.content ? (
            cardSett.cardFooter.content
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      ),
    },
    cardBody: {
      appProps: cardSett
        ? cardSett.cardBody
          ? cardSett.cardBody.appProps
            ? cardSett.cardBody.appProps
            : {}
          : {}
        : {},
      className: cardSett
        ? cardSett.cardBody
          ? cardSett.cardBody.className
            ? cardSett.cardBody.className
            : ""
          : ""
        : "",
      content: cardSett ? (
        cardSett.cardBody ? (
          cardSett.cardBody.content ? (
            cardSett.cardBody.content
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      ),
    },
  };
  return (
    <Card
      className={`${cardColors ? `app-card-${cardColors}` : ""}${
        cardClassName ? ` ${cardClassName}` : ""
      }`}
    >
      {/* Card header */}
      {setCard.enableHeader === true ? (
        <Card.Header
          className={
            setCard.cardHeader.className
              ? ` ${setCard.cardHeader.className}`
              : ""
          }
          {...setCard.cardHeader.props}
        >
          {setCard.cardHeader.content !== ""
            ? setCard.cardHeader.content
            : "Card Header"}
        </Card.Header>
      ) : (
        <></>
      )}

      {/* Card body */}
      <Card.Body
        className={
          setCard.cardBody.className ? ` ${setCard.cardBody.className}` : ""
        }
        {...setCard.cardBody.props}
      >
        {setCard.cardBody.content}
      </Card.Body>

      {/* Card footer */}
      {setCard.enableFooter === true ? (
        <Card.Footer
          className={
            setCard.cardFooter.className
              ? ` ${setCard.cardFooter.className}`
              : ""
          }
          {...setCard.cardFooter.props}
        >
          {setCard.cardFooter.content !== ""
            ? setCard.cardFooter.content
            : "Card Footer"}
        </Card.Footer>
      ) : (
        <></>
      )}
    </Card>
  );
};
const AppCardTitle = (props) => {
  return (
    /* Use AdminLTE 3.2 Dist + Plugins */
    <Card.Title
      className={`card-nav-title${
        props.className ? ` ${props.className}` : ""
      }`}
    >
      {props.children}
    </Card.Title>
  );
};
const AppCardTools = ({ btnColors }) => {
  return (
    /* Use AdminLTE 3.2 Dist + Plugins */
    <div className="card-tools">
      {/* Primary Button */}
      <button
        type="button"
        className="btn btn-tool"
        data-card-widget="maximize"
      >
        <i
          className={`fa-solid fa-expand${
            btnColors ? ` icon-${btnColors}` : ""
          }`}
        />
      </button>
      <button
        type="button"
        className="btn btn-tool"
        data-card-widget="collapse"
      >
        <i className={`fas fa-minus${btnColors ? ` icon-${btnColors}` : ""}`} />
      </button>
      <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className={`fas fa-times${btnColors ? ` icon-${btnColors}` : ""}`} />
      </button>
      {/* End Primary Button */}
    </div>
  );
};
AppCard.Title = AppCardTitle;
AppCard.Tools = AppCardTools;

const AppTable = ({
  children,
  appProps,
  tableAdd,
  isLoading = false,
  loadingText,
}) => {
  return <>asd</>;
};
const AppStructueTree = ({
  children,
  appProps,
  isLoading = false,
  loadingText,
}) => {
  return <>asd</>;
};
const AppTimeLine = ({
  children,
  appProps,
  isLoading = false,
  loadingText,
}) => {
  return <>asd</>;
};

export {
  selectStyle,
  firstTextUpper,
  describeError,
  cursorLoading,
  AppButton,
  AppPreloader,
  AppPageTitle,
  AppWrapper,
  AppModal,
  AppCard,
  AppTable,
  AppStructueTree,
  AppTimeLine,
};
