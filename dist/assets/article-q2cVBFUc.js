const b="data:text/markdown;base64,MS4gU29ydCBhbiBBcnJheQoKPENvZGUgbGFuZ3VhZ2U9ImphdmFzY3JpcHQiPgovL3N0cmluZ3MKY29uc3QgbmFtZXMgPSBbIlNlZW1hIiwgIlJla2hhIiwgIkpheWEiXTsKbmFtZXMuc29ydCgpOwovL1snSmF5YScsICdSZWtoYScsICdTZWVtYScgXQoKLy9OdW1iZXJzCmNvbnN0IG51bWJlcnMgPSBbMTAxLCA4LCA4N107Cm51bWJlcnMuc29ydCgoYSwgYikgPT4gewpyZXR1cm4gYSAtIGI7Cn0pOwovL1sgOCwgODcsIDEwMSBdCjwvQ29kZT4KCjIuIFNlbGVjdCBhIHJhbmRvbSBlbGVtZW50Cgo8Q29kZSBsYW5ndWFnZT0iamF2YXNjcmlwdCI+CmNvbnN0IGl0ZW1zID0gWyJCYWxsIiwgIkJhdCIsICJDdXAiXQpjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppdGVtcy5sZW5ndGgpCml0ZW1zW3JhbmRvbUluZGV4XQo8L0NvZGU+CgozLiBSZXZlcnNlIGEgc3RyaW5nCgo8Q29kZSBsYW5ndWFnZT0iamF2YXNjcmlwdCI+CmZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyaW5nKSB7CiAgcmV0dXJuIHN0cmluZy5zcGxpdCgiICIpLnJldmVyc2UoKS5qb2luKCIgIikKfQoKcmV2ZXJlc2VTdHJpbmcoIlJhbmRvbSBTdHJpbmciKQo8L0NvZGU+Cgo0LiBDaGVjayBpZiBlbGVtZW50IGhhcyBhIGNsYXNzCgo8Q29kZSBsYW5ndWFnZT0iamF2YXNjcmlwdCI+CmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjZWxlbWVudCIpCmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCJhY3RpdmUiKQo8L0NvZGU+Cgo1LiBTdHJpbmcgaW50ZXJwb2xhdGlvbgoKPENvZGUgbGFuZ3VhZ2U9ImphdmFzY3JpcHQiPgpjb25zdCBuYW1lID0gIkpheWEiCmNvbnNvbGUubG9nKGBIaSwgJHtuYW1lfS4gWW91IGhhdmUgJHsyICoqIDN9IG5ldyBub3RpZmljYXRpb25zLmB9Ci8vSGksIEpheWEuIFlvdSBoYXZlIDggbmV3IG5vdGlmaWNhdGlvbnMuCjwvQ29kZT4KCjYuIExvb3AgdGhyb3VnaCBhbiBhcnJheQoKPENvZGUgbGFuZ3VhZ2U9ImphdmFzY3JpcHQiPgpjb25zdCBjYXJzID0gWyJGb3JkIiwgIkJNVyIsICJBdWRpIiBdCmZvciAobGV0IGNhciBvZiBjYXJzKSB7CiAgY29uc29sZS5sb2coY2FyKQp9CjwvQ29kZT4KCjcuIEdldCBjdXJyZW50IHRpbWUKCjxDb2RlIGxhbmd1YWdlPSJqYXZhc2NyaXB0Ij4KY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkKY29uc3QgY3VycmVudFRpbWUgPSBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW50dWVzKCl9OiR7ZGF0ZS5nZXRTZWNvbmRzKCl9YAoKY29uc29sZS5sb2coY3VycmVudFRpbWVzKQovL2V4YW1wbGUgb3V0cHV0OiAiMjI6MTY6NDEiCjwvQ29kZT4KCjguIFJlcGxhY2UgcGFydCBvZiBhIHN0cmluZwoKPENvZGUgbGFuZ3VhZ2U9ImphdmFzY3JpcHQiPgpjb25zdCBzdHJpbmcgPSAiWW91IGFyZSBhd2Vzb21lLiIKY29uc3QgcmVwbGFjZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgiWW91IiwgIldlIikKCmNvbnNvbGUubG9nKHJlcGxhY2VkU3RyaW5nKSAvL091dHB1dDogIldlIGFyZSBhd2Vzb21lIgo8L0NvZGU+Cgo5LiBEZXN0cnVjdGluZyB2YXJpYWJsZSBhc3NpZ25tZW50Cgo8Q29kZSBsYW5ndWFnZT0iamF2YXNjcmlwdCI+CmxldCBwcm9maWxlID0gWydib2InLCAzNCwgJ2NhcnBlbnRlciddOwpsZXQgW25hbWUsIGFnZSwgam9iXSA9IHByb2ZpbGU7CmNvbnNvbGUubG9nKG5hbWUpOwovLyBib2IKPC9Db2RlPgoKMTAuIFVzaW5nIHRoZSBzcHJlYWQgb3BlcmF0b3IKCjxDb2RlIGxhbmd1YWdlPSJqYXZhc2NyaXB0Ij4KbGV0IGRhdGEgPSBbMSwyLDMsNCw1XTsKY29uc29sZS5sb2coLi4uZGF0YSk7Ci8vICAxIDIgMyA0IDUKbGV0IGRhdGEyID0gWzYsNyw4LDksMTBdOwpsZXQgY29tYmluZWQgPSBbLi4uZGF0YSwgLi4uZGF0YTJdOwpjb25zb2xlLmxvZyguLi5jb21iaW5lZCk7Ci8vIDEgMiAzIDQgNSA2IDcgOCA5IDEwCmNvbnNvbGUubG9nKE1hdGgubWF4KC4uLmNvbWJpbmVkKSk7Ci8vIDEwCjwvQ29kZT4K";export{b as default};
