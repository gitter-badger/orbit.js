import Orbit from 'orbit/main';
import Action from 'orbit/action';
import ActionQueue from 'orbit/action-queue';
import Document from 'orbit/document';
import Evented from 'orbit/evented';
import Notifier from 'orbit/notifier';
import Operation from 'orbit/operation';
import Requestable from 'orbit/requestable';
import RequestConnector from 'orbit/request-connector';
import Transaction from 'orbit/transaction';
import Transformable from 'orbit/transformable';
import Transformation from 'orbit/transformation';
import TransformConnector from 'orbit/transform-connector';
import { assert } from 'orbit/lib/assert';
import { arrayToOptions } from 'orbit/lib/config';
import { deprecate } from 'orbit/lib/deprecate';
import { diffs } from 'orbit/lib/diffs';
import { eq } from 'orbit/lib/eq';
import { Exception, PathNotFoundException } from 'orbit/lib/exceptions';
import { spread } from 'orbit/lib/functions';
import { Class, clone, defineClass, expose, extend, extendClass, isArray, isObject, isNone } from 'orbit/lib/objects';
import { coalesceOperations } from 'orbit/lib/operations';
import { capitalize } from 'orbit/lib/strings';
import { noop, required } from 'orbit/lib/stubs';
import { uuid } from 'orbit/lib/uuid';

if (typeof Promise !== 'undefined') {
  Orbit.Promise = Promise;
}

Orbit.Action = Action;
Orbit.ActionQueue = ActionQueue;
Orbit.Document = Document;
Orbit.Evented = Evented;
Orbit.Notifier = Notifier;
Orbit.Operation = Operation;
Orbit.Requestable = Requestable;
Orbit.RequestConnector = RequestConnector;
Orbit.Transaction = Transaction;
Orbit.Transformable = Transformable;
Orbit.Transformation = Transformation;
Orbit.TransformConnector = TransformConnector;
// lib fns
Orbit.assert = assert;
Orbit.arrayToOptions = arrayToOptions;
Orbit.deprecate = deprecate;
Orbit.diffs = diffs;
Orbit.eq = eq;
Orbit.Exception = Exception;
Orbit.PathNotFoundException = PathNotFoundException;
Orbit.spread = spread;
Orbit.Class = Class;
Orbit.clone = clone;
Orbit.defineClass = defineClass;
Orbit.expose = expose;
Orbit.extend = extend;
Orbit.extendClass = extendClass;
Orbit.isArray = isArray;
Orbit.isObject = isObject;
Orbit.isNone = isNone;
Orbit.coalesceOperations = coalesceOperations;
Orbit.capitalize = capitalize;
Orbit.noop = noop;
Orbit.required = required;
Orbit.uuid = uuid;

export default Orbit;
