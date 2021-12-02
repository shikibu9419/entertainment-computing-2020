import { Finger, FingerCurl, FingerDirection } from './finger_description.js';
import GestureDescription from './gesture_description.js';

// describe victory gesture ✌️
const KillyouGesture = new GestureDescription('killyou');

// thumb:
KillyouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
KillyouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
KillyouGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
KillyouGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
KillyouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// index:
KillyouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
KillyouGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
KillyouGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
KillyouGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.4);

// middle:
KillyouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
KillyouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
KillyouGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 2.0);

// ring:
KillyouGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
KillyouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
KillyouGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
KillyouGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.4);

// pinky:
KillyouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
KillyouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
KillyouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
KillyouGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
KillyouGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.4);

export default KillyouGesture;
