# nuggit

Tool for parsing [SAPLink nuggets](https://wiki.scn.sap.com/wiki/display/ABAP/SAPlink)

Current use case is extracting (outside of an SAP system) individual programs or classes from large nugg files.

# Installation

`npm install -g nuggit`

# Usage
Assumes use from command line.

## Split a big nugget into smaller nuggets
Argument description in table below.

`nuggit <source.nugg> [<directory>] [--list]`

|Argument  |Description
|--|--|
|`<source.nugg>` |Path to source nugget |
|`<directory>`   |*Optional* Path to output directory if different from current directory |
|`--list`| *Optional* Outputs a list of objects in a nugget that can be parsed by this program |

# TODO
## Features TODO
- option to specify a single object to extract, as opposed to all of the programs?
- function module source code?
- unescape source code from XML?
	- include non source parameters as abap comments at the top of the file?
