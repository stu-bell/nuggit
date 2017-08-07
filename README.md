# nuggit

Tool for parsing [SAPLink nuggets](https://wiki.scn.sap.com/wiki/display/ABAP/SAPlink)

Currently use case is extracting (outside of an SAP system) individual programs or classes from large nugg files.

# Usage
Assumes use from command line

|Command  |Description|
|---|---  |
|`nuggit <path/to/source.nugg> [, <output/path>] [options]``|Split a big nugget into smaller nuggets |

|Option |Description|
|--|--|
|--list| Outputs a list of objects in a nugget that can be parsed by this program |

# TODO
## Features TODO
- option to specify a single object to extract, as opposed to all of the programs?
- function module source code?
- unescape source code from XML?
	- include non source parameters as abap comments at the top of the file?
