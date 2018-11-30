import { renderInputs } from "./UI.js";
import { renderSubmit } from "./UI.js";
import { toJSONString } from "./UI.js";
import { saveData } from "./Storage.js";
import { loadData } from "./Storage.js";

import {User} from './User.js';
import {Measure} from './Measure.js';
import {Notification} from './Notification.js';
import {Danger} from './Danger.js';


renderInputs("sys","dia","pulse");
renderSubmit();

Measure.load();

