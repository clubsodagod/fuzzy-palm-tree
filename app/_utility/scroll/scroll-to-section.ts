import { RefIDObject } from "@/app/_library/types/refs";

export function scrollToSection(
    id: string, 
    refs:RefIDObject[], 
    currentSection: string|undefined,
) {

    // const {
    //     appContainer:{
    //         currentSection
    //     }
    // } = AppContext()
    // console.log(currentSection);
    
    // Find the index of the current section in the refs array
    const currentIndex = refs.findIndex(section => section.id === currentSection);
    const goToIndex = refs.findIndex(section => section.id === id);

    // Helper function to scroll to a section by index
    function scrollToIndex(index: number) {
        refs[index]?.ref.current?.scrollIntoView({
            block: "start",
            behavior: "smooth", // Adding smooth scrolling for a better experience
        });
    };

    switch (id) {

        case "next":
            if (currentIndex >= 0 && currentIndex < refs.length - 1) {
                // Go to the next section if there is one
                scrollToIndex(currentIndex + 1);
            }
            break;

        case "previous":
            if (currentIndex > 0) {
                // Go to the previous section if there is one
                scrollToIndex(currentIndex - 1);
            }
            break;

        case "top":
            scrollToIndex(0);
            break;

        default:
            scrollToIndex(goToIndex);
            break;
    }

}