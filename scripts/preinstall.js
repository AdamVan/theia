/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
'use-strict';

// @ts-check

let error = false;

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const regexp = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const match = process.versions.node.match(regexp);
const [, majorNodeVersion, minorNodeVersion, patchNodeVersion] = match || [];

if (majorNodeVersion < 10 || majorNodeVersion >= 13) {
    console.error('\033[1;31m*** [Theia] Please use node >=10 and <=12.\033[0;0m');
    error = true;
}

// The recommended Node.js version comes from the actual electron version. (>=12.14.1)
if (majorNodeVersion < 12) {
    console.warn('\033[1;33m*** [Theia] Please use node >=12.14.1.\033[0;0m');
} else if (majorNodeVersion == 12) {
    if (minorNodeVersion < 14) {
        console.warn('\033[1;33m*** [Theia] Please use node >=12.14.1.\033[0;0m');
    }
}

if (error) {
    console.error('');
    process.exit(1);
}
