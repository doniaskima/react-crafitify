import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as styled_components from 'styled-components';

interface SecondaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
declare const SecondaryButton: React.FC<SecondaryButtonProps>;

interface ButtonProps$1 extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  shadowColor?: string;
  activeColor?: string;
}
declare const AnimatedButton: React.FC<ButtonProps$1>;

interface ButtonGroupProps {
  vertical?: boolean;
  children?: React.ReactNode;
}
declare const ButtonGroupButton: styled_components.IStyledComponent<
  'web',
  {
    ref?: React.LegacyRef<HTMLButtonElement> | undefined;
    key?: React.Key | null | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'button' | 'submit' | 'reset' | undefined;
    value?: string | number | readonly string[] | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | 'true' | 'false') | 'inherit' | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | 'true' | 'false') | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | 'true' | 'false') | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: 'yes' | 'no' | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;
    inputMode?:
      | 'search'
      | 'text'
      | 'none'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | 'true' | 'false') | undefined;
    'aria-autocomplete'?: 'list' | 'none' | 'inline' | 'both' | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | 'true' | 'false') | undefined;
    'aria-checked'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?:
      | boolean
      | 'time'
      | 'step'
      | 'true'
      | 'false'
      | 'page'
      | 'location'
      | 'date'
      | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | 'true' | 'false') | undefined;
    'aria-dropeffect'?:
      | 'link'
      | 'none'
      | 'copy'
      | 'execute'
      | 'move'
      | 'popup'
      | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | 'true' | 'false') | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | 'true' | 'false') | undefined;
    'aria-haspopup'?:
      | boolean
      | 'dialog'
      | 'menu'
      | 'true'
      | 'false'
      | 'grid'
      | 'listbox'
      | 'tree'
      | undefined;
    'aria-hidden'?: (boolean | 'true' | 'false') | undefined;
    'aria-invalid'?:
      | boolean
      | 'true'
      | 'false'
      | 'grammar'
      | 'spelling'
      | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
    'aria-modal'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiline'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiselectable'?: (boolean | 'true' | 'false') | undefined;
    'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-readonly'?: (boolean | 'true' | 'false') | undefined;
    'aria-relevant'?:
      | 'text'
      | 'additions'
      | 'additions removals'
      | 'additions text'
      | 'all'
      | 'removals'
      | 'removals additions'
      | 'removals text'
      | 'text additions'
      | 'text removals'
      | undefined;
    'aria-required'?: (boolean | 'true' | 'false') | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | 'true' | 'false') | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?:
      | {
          __html: string | TrustedHTML;
        }
      | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionEndCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionStart?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionStartCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionUpdate?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?:
      | React.FormEventHandler<HTMLButtonElement>
      | undefined;
    onInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?:
      | React.KeyboardEventHandler<HTMLButtonElement>
      | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?:
      | React.KeyboardEventHandler<HTMLButtonElement>
      | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onEmptied?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onResize?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onWaiting?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;
    onDrag?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?:
      | React.TouchEventHandler<HTMLButtonElement>
      | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?:
      | React.TouchEventHandler<HTMLButtonElement>
      | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnterCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeaveCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onGotPointerCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onGotPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onLostPointerCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onScroll?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationStartCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationIteration?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationIterationCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onTransitionEnd?:
      | React.TransitionEventHandler<HTMLButtonElement>
      | undefined;
    onTransitionEndCapture?:
      | React.TransitionEventHandler<HTMLButtonElement>
      | undefined;
  }
>;
interface ButtonGroupType extends React.FC<ButtonGroupProps> {
  Button: typeof ButtonGroupButton;
}
declare const ButtonGroup: ButtonGroupType;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverColor?: string;
}
declare const DiagonalSwipeButton: React.FC<ButtonProps>;

interface GenerateBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  loading?: boolean;
}
declare const GenerateBtn: React.FC<GenerateBtnProps>;

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
}
declare const PrimaryButton: React.FC<PrimaryButtonProps>;

interface ShakeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
declare const ShakeButton: React.FC<ShakeButtonProps>;

declare const StyledButton: styled_components.IStyledComponent<
  'web',
  {
    ref?: React.LegacyRef<HTMLButtonElement> | undefined;
    key?: React.Key | null | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    name?: string | undefined;
    type?: 'button' | 'submit' | 'reset' | undefined;
    value?: string | number | readonly string[] | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | 'true' | 'false') | 'inherit' | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | 'true' | 'false') | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | 'true' | 'false') | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: 'yes' | 'no' | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;
    inputMode?:
      | 'search'
      | 'text'
      | 'none'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | 'true' | 'false') | undefined;
    'aria-autocomplete'?: 'list' | 'none' | 'inline' | 'both' | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | 'true' | 'false') | undefined;
    'aria-checked'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?:
      | boolean
      | 'time'
      | 'step'
      | 'true'
      | 'false'
      | 'page'
      | 'location'
      | 'date'
      | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | 'true' | 'false') | undefined;
    'aria-dropeffect'?:
      | 'link'
      | 'none'
      | 'copy'
      | 'execute'
      | 'move'
      | 'popup'
      | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | 'true' | 'false') | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | 'true' | 'false') | undefined;
    'aria-haspopup'?:
      | boolean
      | 'dialog'
      | 'menu'
      | 'true'
      | 'false'
      | 'grid'
      | 'listbox'
      | 'tree'
      | undefined;
    'aria-hidden'?: (boolean | 'true' | 'false') | undefined;
    'aria-invalid'?:
      | boolean
      | 'true'
      | 'false'
      | 'grammar'
      | 'spelling'
      | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
    'aria-modal'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiline'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiselectable'?: (boolean | 'true' | 'false') | undefined;
    'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-readonly'?: (boolean | 'true' | 'false') | undefined;
    'aria-relevant'?:
      | 'text'
      | 'additions'
      | 'additions removals'
      | 'additions text'
      | 'all'
      | 'removals'
      | 'removals additions'
      | 'removals text'
      | 'text additions'
      | 'text removals'
      | undefined;
    'aria-required'?: (boolean | 'true' | 'false') | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | 'true' | 'false') | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?:
      | {
          __html: string | TrustedHTML;
        }
      | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionEndCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionStart?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionStartCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionUpdate?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React.CompositionEventHandler<HTMLButtonElement>
      | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?:
      | React.FormEventHandler<HTMLButtonElement>
      | undefined;
    onInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?:
      | React.KeyboardEventHandler<HTMLButtonElement>
      | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?:
      | React.KeyboardEventHandler<HTMLButtonElement>
      | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onEmptied?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onResize?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?:
      | React.ReactEventHandler<HTMLButtonElement>
      | undefined;
    onWaiting?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;
    onDrag?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?:
      | React.TouchEventHandler<HTMLButtonElement>
      | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?:
      | React.TouchEventHandler<HTMLButtonElement>
      | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnterCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeaveCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onGotPointerCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onGotPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onLostPointerCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLButtonElement>
      | undefined;
    onScroll?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationStartCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationIteration?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onAnimationIterationCapture?:
      | React.AnimationEventHandler<HTMLButtonElement>
      | undefined;
    onTransitionEnd?:
      | React.TransitionEventHandler<HTMLButtonElement>
      | undefined;
    onTransitionEndCapture?:
      | React.TransitionEventHandler<HTMLButtonElement>
      | undefined;
  }
>;

interface TertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  shadowColor?: string;
}
declare const TertiaryButton: React.FC<TertiaryButtonProps>;

interface CustomIconButtonProps {
  size?: 'small' | 'medium' | 'large';
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  activeColor?: string;
}
declare const CustomIconButton: React.FC<CustomIconButtonProps>;

interface CustomStyledButtonProps {
  design?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
  children: React.ReactNode;
}
declare const CustomStyledButton: React.FC<CustomStyledButtonProps>;

interface FancyArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  mainBgColor?: string;
  arrowColor?: string;
}
declare const FancyArrowButton: React.FC<FancyArrowButtonProps>;

interface FancyGradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  mainBgColor?: string;
  gradientBgColor1?: string;
  gradientBgColor2?: string;
  ringColor?: string;
  shadowColor?: string;
  hoverShadowColor?: string;
  mainFgColor?: string;
  hoverFgColor?: string;
}
declare const FancyGradientButton: React.FC<FancyGradientButtonProps>;

interface FancyLetterSpacingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  letterSpacing?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverLetterSpacing?: string;
  activeLetterSpacing?: string;
}
declare const FancyLetterSpacingButton: React.FC<FancyLetterSpacingButtonProps>;

interface FancyOutlineButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  children: React.ReactNode;
}
declare const FancyOutlineButton: React.FC<FancyOutlineButtonProps>;

interface FancyShadowButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  hoverColor?: string;
  bgColor?: string;
  children: React.ReactNode;
}
declare const FancyShadowButton: React.FC<FancyShadowButtonProps>;

declare const GradientBorderButton: React.FC<{
  children: ReactNode;
}>;

interface HoverEffectButtonProps {
  size?: 'small' | 'medium' | 'large';
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  children: ReactNode;
}
declare const HoverEffectButton: React.FC<HoverEffectButtonProps>;

declare const Lovebtn: React.FC<{
  children: ReactNode;
}>;

declare const RefreshButton: React.FC<{
  children: ReactNode;
}>;

declare const ScanButton: React.FC<{
  children: ReactNode;
}>;

export {
  AnimatedButton,
  ButtonGroup,
  CustomIconButton,
  CustomStyledButton,
  DiagonalSwipeButton,
  FancyArrowButton,
  FancyGradientButton,
  FancyLetterSpacingButton,
  FancyOutlineButton,
  FancyShadowButton,
  GenerateBtn,
  GradientBorderButton,
  HoverEffectButton,
  Lovebtn,
  PrimaryButton,
  RefreshButton,
  ScanButton,
  SecondaryButton,
  ShakeButton,
  StyledButton,
  TertiaryButton,
};
