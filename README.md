# saplink-nugget-split

# Usage
Assumes use from command line

|Command  |Description|
|---|---  |
|`nuggit <path/to/source.nugg> [options]``|Split out classes from the main source.nugg |

|Option |Description|
|--|--|
|--list| Outputs a list of objects in a nugget that can be parsed by this program |


# dev
`node --inspect --debug-brk src/index.js ../dev/saplink-nugget-split/test.nugg`

# TODO
Places tasks might be listed:
- TODO/FIXME tags throughout source code
- [Repository issues on GitLab](https://git.bluefinsolutions.com/sbell/nuggit/issues)

## Features TODO
- option to specify a single object to extract, as opposed to all of the programs?
- function module source code?
- unescape source code from XML?
	- include non source parameters as abap comments at the top of the file?
